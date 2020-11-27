import { Component, Host, OnInit, Input } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import _ from 'lodash-es'
import { TabCommunicationService } from 'src/app/shared/tab-communication.service';
import { delay, take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/api-chain/api/product.service';
import { AuthorisedLayoutComponent } from '../authorised-layout/authorised-layout.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-authorised-top-nav',
  templateUrl: './authorised-top-nav.component.html',
  styleUrls: ['./authorised-top-nav.component.scss']
})
export class AuthorisedTopNavComponent implements OnInit {

  @Input()
  returnUrl: string = null;

  subTabs: Subscription;

  tabs: string[] = [];
  selectedIndex: number = 0;
  tabs$: Observable<string[]>
  drobtinice;
  productName;
  drobtiniceTitle;

  constructor(
    // public tabCommunicationService: TabCommunicationService,
    @Host() public authorizedLayout: AuthorisedLayoutComponent,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private chainProductService: ProductService
  ) {
  }

  get tabCommunicationService(): TabCommunicationService {
    return this.authorizedLayout.tabCommunicationService
  }

  get rootTab() {
    return this.tabCommunicationService.rootTab
  }

  setIndex(index: number) {
    if (!this.tabCommunicationService.isLockedIndex(index)) {
      this.tabCommunicationService.confirmActiveTab(index);
    }
  }

  ngOnInit(): void {
    this.tabs$ = this.tabCommunicationService.announceTabTitles$.pipe(delay(0));
    this.tabCommunicationService.confirmActiveTab$.subscribe(val => {
      this.selectedIndex = val
    })

    this.prepareDrobtinice();
  }

  async prepareDrobtinice() {
    this.drobtinice = this.route.snapshot.data.drobtinice;
    if (this.drobtinice) {
      if (this.router.url.startsWith('/product-labels/')) {
        let res = await this.chainProductService.getProductByAFId(this.route.snapshot.params.id).pipe(take(1)).toPromise();
        if (res && res.status === "OK" && res.data) {
          this.productName = res.data.name;
          this.drobtiniceTitle = this.productName + this.drobtinice.title;
        }
      }
      if (this.route.snapshot.data.drobtinice.collectorFarmerType) {
        let type = this.route.snapshot.params.type;
        if (type === 'farmers') this.drobtiniceTitle = this.drobtiniceTitle + $localize`:@@breadCrumb.collectors.farmer:Farmer`
        if (type === 'collectors') this.drobtiniceTitle = this.drobtiniceTitle + $localize`:@@breadCrumb.collectors.collector:Collector`
      }
    }
  }

  goUp() {
    if (this.returnUrl) this.router.navigateByUrl(this.returnUrl);
    else if (this.drobtinice && this.drobtinice.goBack) {
      this.goBack();
    } else {
      this.router.navigate(this.buildRoute().split("/"));
    }
  }

  buildRoute() {
    let route = this.drobtinice.route
    let params = this.route.snapshot.params;
    if (Object.keys(params).length > 0 && route != null) {
      let tmpRoute = route;
      Object.entries(params).forEach(
        ([key, value]) => {
          tmpRoute = tmpRoute.replace(':' + key, value)
        }
      )
      route = tmpRoute;
    }
    return route;
  }

  goBack(): void {
    this.location.back();
  }

  isLockedIndex(tab: number) {
    return this.tabCommunicationService.isLockedIndex(tab)
  }

  ngOnDestroy() {
    if (this.subTabs) this.subTabs.unsubscribe();
  }


}
