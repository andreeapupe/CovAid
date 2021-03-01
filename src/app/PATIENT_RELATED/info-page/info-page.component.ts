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

  flip: string = 'inactive'

  toggleFlip() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive'
  }
}
