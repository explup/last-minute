import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { TabListMasterPage } from '../pages';
import { TabSearchPage } from '../pages';
import { TabSettingPage } from '../pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabListMasterPageRoot: any = TabListMasterPage;
  tabSearchPageRoot: any = TabSearchPage;
  tabSettingPageRoot: any = TabSettingPage;

  tabVacationTitle = " ";
  tabSearchTitle = " ";
  tabRecommendTitle = " ";
  tabProfileTitle = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB_VACATION_TITLE', 'TAB_SEARCH_TITLE', 'TAB_RECOMMEND_TITLE', 'TAB_PROFILE_TITLE']).subscribe(values => {
      this.tabVacationTitle = values['TAB_VACATION_TITLE'];
      this.tabSearchTitle = values['TAB_SEARCH_TITLE'];
      this.tabRecommendTitle = values['TAB_RECOMMEND_TITLE'];
      this.tabProfileTitle = values['TAB_PROFILE_TITLE'];
    });
  }
}
