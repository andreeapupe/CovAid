import { Component, OnInit, Inject, HostListener } from '@angular/core'
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-patient-appointments-page',
  templateUrl: './patient-appointments-page.component.html',
  styleUrls: ['./patient-appointments-page.component.css'],
})
export class PatientAppointmentsPageComponent implements OnInit {
  windowScrolled: boolean
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false
    }
  }
  scrollToTop() {
    ;(function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll)
        window.scrollTo(0, currentScroll - currentScroll / 8)
      }
    })()
  }
  ngOnInit(): void {}
}
