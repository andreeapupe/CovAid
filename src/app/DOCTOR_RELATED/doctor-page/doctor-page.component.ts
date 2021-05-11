import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core'
import { trigger, state, style, transition, animate } from '@angular/animations'
import {
  getLocaleDateTimeFormat,
  FormatWidth,
  formatDate,
} from '@angular/common'

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css'],
  animations: [
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
export class DoctorPageComponent implements OnInit {
  dateTime = new Date()
  state = 'collapsed'

  expandCollapse(): void {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed'
  }

  constructor(@Inject(LOCALE_ID) public locale: string) {}

  formatMyDate(dateTime: Date) {
    const format = getLocaleDateTimeFormat(this.locale, FormatWidth.Long)
    const date = formatDate(this.dateTime, 'MMMM d, y', this.locale)
    const time = formatDate(this.dateTime, 'HH:mm', this.locale)
    return format
      .replace("'", '')
      .replace("'", '')
      .replace('{1}', date)
      .replace('{0}', time)
  }

  ngOnInit(): void {}
}
