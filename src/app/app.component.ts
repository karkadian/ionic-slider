import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: Array<Object>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate = [
      {
        title: "Home",
        url: "/home",
        icon: "home"
      },
      {
        title: "Efecto 1",
        url: "/page1",
        icon: "cart"
      },
      {
        title: "Efecto 2",
        url: "/page2",
        icon: "build"
      },
      {
        title: "Efecto 3",
        url: "/page3",
        icon: "layers"
      }
    ];
  }
}
