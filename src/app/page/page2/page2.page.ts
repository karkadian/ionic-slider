import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  data: any;

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.data = [
        {
          label: 'Slide 1'
        },
        {
          label: 'Slide 2'
        },
        {
          label: 'Slide 3'
        }
      ];
    }, 2000);
  }
}
