import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicControllerService } from 'src/api/api/publicController.service';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-front-page-privacy',
  templateUrl: './front-page-privacy.component.html',
  styleUrls: ['./front-page-privacy.component.scss']
})
export class FrontPagePrivacyComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private publicController: PublicControllerService
  ) { }

  uuid = this.route.snapshot.params.uuid;

  title = $localize`:@@frontPage.privacy.title:Privacy policy`;
  action = this.route.snapshot.data.action;
  doShowTabs = true;

  privacyText: string = null;

  ngOnInit(): void {
    this.initLabel().then();
  }

  async initLabel() {

    if (this.action === 'privacy_only') {
      this.uuid = environment.harcodedLabelForPrivacyOnRegisterPage;
      this.doShowTabs = false;
    }

    const res = await this.publicController.getPublicProductLabelValuesUsingGET(this.uuid).pipe(take(1)).toPromise();
    if (res && res.status === 'OK') {
      this.prepareData(res.data.fields);
    }
  }

  prepareData(data) {
    for (const item of data) {
      if (item.name === 'settings.privacyPolicyText') {
        this.privacyText = item.value;
      }
    }
  }

}
