import { Component, Inject, OnInit } from '@angular/core';
import { B2cPageComponent } from '../b2c-page.component';
import { ApiBusinessToCustomerSettings } from '../../../../api/model/apiBusinessToCustomerSettings';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { take } from 'rxjs/operators';
import { defaultEmptyObject, generateFormFromMetadata } from '../../../../shared/utils';
import { ApiProductLabelFeedback } from '../../../../api/model/apiProductLabelFeedback';
import {
  ApiProductLabelFeedbackValidationScheme,
  questionnaireAnswersFormMetadata, questionnaireAnswersValidationScheme
} from '../../../m-product/product-label-feedback-page/feedback-modal/validation';
import { EnumSifrant } from '../../../shared-services/enum-sifrant';
import { GlobalEventManagerService } from '../../../core/global-event-manager.service';
import { PublicControllerService } from '../../../../api/api/publicController.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-b2c-bpapp',
  templateUrl: './b2c-bpapp.component.html',
  styleUrls: ['./b2c-bpapp.component.scss']
})
export class B2cBpappComponent implements OnInit {

  b2cSettings: ApiBusinessToCustomerSettings;
  iframeSrc: SafeResourceUrl;
  submitted = false;

  filterCoffeeForm = new FormControl(null);
  espressoForm = new FormControl(null);
  frenchPressForm = new FormControl(null);
  fullyAutomaticForm = new FormControl(null);
  stovetopForm = new FormControl(null);
  otherForm = new FormControl(null);
  feedbackForm: FormGroup;

  tab: string = null;

  title = $localize`:@@frontPage.feedback.title:Feedback`;

  productName = '';

  gdprHtmlContext = '';

  constructor(
      @Inject(B2cPageComponent) private b2cPage: B2cPageComponent,
      private globalEventsManager: GlobalEventManagerService,
      private publicController: PublicControllerService,
      private sanitizer: DomSanitizer
  ) {
    this.b2cSettings = b2cPage.b2cSettings;
  }

  ngOnInit(): void {
    this.initLabel();
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://bpapp.inatrace.net/tablero/tablero-fincas-inatrace?finca=" + this.b2cSettings.bpappId + "&pais=Costa%20Rica");
    //this.feedbackForm = generateFormFromMetadata(ApiProductLabelFeedback.formMetadata(), defaultEmptyObject(ApiProductLabelFeedback.formMetadata()), ApiProductLabelFeedbackValidationScheme);
    //const questionnaireAnswersForm = generateFormFromMetadata(questionnaireAnswersFormMetadata(), {}, questionnaireAnswersValidationScheme);
    //this.feedbackForm.setControl('questionnaireAnswers', questionnaireAnswersForm);
    //this.feedbackForm.updateValueAndValidity();
  }

  initLabel() {
    this.prepareGDPR(this.b2cPage.publicProductLabel.fields);
  }

  prepareGDPR(data) {
    for (const item of data) {
      if (item.name === 'name') {
        this.productName = item.value;
      }
      if (item.name === 'settings.gdprText') {
        this.gdprHtmlContext = item.value;
      }
    }
  }

  async submitFeedback() {
    this.submitted = true;
    if (this.feedbackForm.invalid) {
      return false;
    }
    let result = false;
    try {
      this.globalEventsManager.showLoading(true);
      const data = this.prepareData();
      const res = await this.publicController.addProductLabelFeedbackUsingPOST(this.b2cPage.uuid, data).pipe(take(1)).toPromise();
      if (res && res.status === 'OK') {
        result = true;
        this.globalEventsManager.push({
          action: 'success',
          notificationType: 'success',
          title: $localize`:@@frontPage.feedback.success.title:Submitted`,
          message: $localize`:@@frontPage.feedback.success.message:Successfully submitted.`
        });
        this.feedbackForm = generateFormFromMetadata(ApiProductLabelFeedback.formMetadata(), defaultEmptyObject(ApiProductLabelFeedback.formMetadata()), ApiProductLabelFeedbackValidationScheme);
        const questionnaireAnswersForm = generateFormFromMetadata(questionnaireAnswersFormMetadata(), {}, questionnaireAnswersValidationScheme);
        this.feedbackForm.setControl('questionnaireAnswers', questionnaireAnswersForm);
        this.feedbackForm.updateValueAndValidity();
        this.filterCoffeeForm.setValue(null);
        this.espressoForm.setValue(null);
        this.frenchPressForm.setValue(null);
        this.fullyAutomaticForm.setValue(null);
        this.stovetopForm.setValue(null);
        this.otherForm.setValue(null);
      }
    } catch (e) {
      this.globalEventsManager.push({
        action: 'error',
        notificationType: 'error',
        title: $localize`:@@frontPage.feedback.error.title:Something went wrong`,
        message: $localize`:@@frontPage.feedback.error.message:Please try again.`
      });
    } finally {
      this.submitted = false;
      this.globalEventsManager.showLoading(false);
    }
    return result;
  }

  prepareData() {
    const data = this.feedbackForm.value;

    data.questionnaireAnswers.howDoYouPrepare = JSON.stringify({
      FILTER_COFFEE: this.filterCoffeeForm.value,
      ESPRESSO_MACHINE: this.espressoForm.value,
      FRENCH_PRESS: this.frenchPressForm.value,
      FULLY_AUTOMATIC_MACHINE: this.fullyAutomaticForm.value,
      STOVETOP_MOKA_POT: this.stovetopForm.value,
      OTHER: this.otherForm.value
    });

    return data;
  }

  get statusList() {
    const obj = {};
    obj['PRAISE'] = $localize`:@@frontPage.feedback.statusList.registred:Praise`;
    obj['PROPOSAL'] = $localize`:@@frontPage.feedback.statusList.active:Proposal`;
    obj['COMPLAINT'] = $localize`:@@frontPage.feedback.statusList.deactivated:Complaint`;
    return obj;
  }
  codebookStatus = EnumSifrant.fromObject(this.statusList);

  get ageCodes() {
    const obj = {};
    obj['Male'] = $localize`:@@frontPage.feedback.ageCodes.male:Male`;
    obj['Female'] = $localize`:@@frontPage.feedback.ageCodes.female:Female`;
    obj['N/A'] = $localize`:@@frontPage.feedback.ageCodes.na:N/A`;
    return obj;
  }
  codebookAgeCodes = EnumSifrant.fromObject(this.ageCodes);


  get tasteCodes() {
    const obj = {};
    obj['Better'] = $localize`:@@frontPage.feedback.tasteCodes.better:Better`;
    obj['Same'] = $localize`:@@frontPage.feedback.tasteCodes.same:Same`;
    obj['Worse'] = $localize`:@@frontPage.feedback.tasteCodes.worse:Worse`;
    return obj;
  }
  codebookTasteCodes = EnumSifrant.fromObject(this.tasteCodes);


  conditionConfirmation(control: AbstractControl): ValidationErrors | null {
    const condition = control.value;
    return condition === true ? null : { conditionsNotConfirmed: true };
  }

}
