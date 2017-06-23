import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RedditPage } from '../reddits/reddit';
import { SettingPage } from '../settings/settings';
import { AboutPage } from '../about/about';

@Component({
    templateUrl : 'tabs.html'
})

export class TabsPage {
    tab1Root : any = RedditPage;
    tab2Root : any = SettingPage;
    tab3Root : any = AboutPage;

    constructor(){

    }
}




