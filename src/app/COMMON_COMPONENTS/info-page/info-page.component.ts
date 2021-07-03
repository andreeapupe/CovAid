import { Component, HostListener, OnInit } from '@angular/core'

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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 80) {
      let element = document.getElementById('navbar')
      element.classList.add('sticky')
    } else {
      let element = document.getElementById('navbar')
      element.classList.remove('sticky')
    }
  }
}
