import { Component, OnInit, HostListener, Inject } from '@angular/core'
import { trigger, state, transition, style, animate } from '@angular/animations'
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-patient-appointments-page',
  templateUrl: './patient-appointments-page.component.html',
  styleUrls: ['./patient-appointments-page.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate(300)]),
      transition(':leave', [animate(500)]),
    ]),
    ,
    trigger('bodyExpansion', [
      state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed, void => collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class PatientAppointmentsPageComponent implements OnInit {
  value = ''
  filterTerm: string
  constructor(@Inject(DOCUMENT) document) {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' })
  }

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 85) {
      let element = document.getElementById('navbar')
      element.classList.add('sticky')
    } else {
      let element = document.getElementById('navbar')
      element.classList.remove('sticky')
    }
  }
}
