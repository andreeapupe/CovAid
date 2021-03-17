import { Component, OnInit } from '@angular/core'
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('700ms ease-out')),
      transition('inactive => active', animate('600ms ease-in')),
    ]),
  ],
})
export class InfoPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  flip1: string = 'inactive'
  flip2: string = 'inactive'

  toggleFlip1() {
    this.flip1 = this.flip1 == 'inactive' ? 'active' : 'inactive'
  }

  toggleFlip2() {
    this.flip2 = this.flip2 == 'inactive' ? 'active' : 'inactive'
  }
}
