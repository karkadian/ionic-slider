import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
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
