import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
})
export class InfoPageComponent implements OnInit {
  panelOpenState = false
  firstPanelOpenState = false
  secondPanelOpenState = false
  thirdPanelOpenState = false
  fourthPanelOpenState = false

  constructor() {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' })
  }

  ngOnInit(): void {}
}
