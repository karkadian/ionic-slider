import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
})
export class Page3Page implements OnInit {
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
