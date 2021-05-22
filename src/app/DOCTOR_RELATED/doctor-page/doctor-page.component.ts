import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { trigger, state, style, transition, animate } from '@angular/animations'
import {
  getLocaleDateTimeFormat,
  FormatWidth,
  formatDate,
} from '@angular/common'
import { FilterModalComponent } from '../MODALS/filter-modal/filter-modal.component'

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
  value = ''
  filterTerm: string
  appointmentsNumber: number = 0
  appointmentsNo: number = 0
  approvedNumber: number = 0
  approvedNo: number = 0
  rejectedNumber: number = 0
  rejectedNo: number = 0
  pendingNumber: number = 0
  pendingNo: number = 0

  userRecords = [
    {
      appointmentId: 1,
      userId: 2,
      name: 'Celesta Tankard',
      email: 'ctankard0@bravesites.com',
      gender: 'F',
      age: 20,
      status: 'Pending',
    },
    {
      appointmentId: 2,
      userId: 2,
      name: 'Kerr Novotne',
      email: 'knovotne1@discuz.net',
      gender: 'F',
      age: 29,
      status: 'Pending',
    },
    {
      appointmentId: 3,
      userId: 3,
      name: 'Lillian McAughtry',
      email: 'lmcaughtry2@bbc.co.uk',
      gender: 'M',
      age: 22,
      status: 'Approved',
    },
    {
      appointmentId: 4,
      userId: 4,
      name: 'Jillian Popworth',
      email: 'jpopworth3@irs.gov',
      gender: 'F',
      age: 42,
      status: 'Rejected',
    },
    {
      appointmentId: 5,
      userId: 5,
      name: 'Issie Fegan',
      email: 'ifegan4@google.com.br',
      gender: 'M',
      age: 59,
      status: 'Rejected',
    },
    {
      appointmentId: 6,
      userId: 6,
      name: 'Imelda Mallinder',
      email: 'imallinder5@usgs.gov',
      gender: 'F',
      age: 24,
      status: 'Pending',
    },
    {
      appointmentId: 7,
      userId: 7,
      name: 'Elaina Roddam',
      email: 'eroddam6@webeden.co.uk',
      gender: 'F',
      age: 47,
      status: 'Rejected',
    },
    {
      appointmentId: 8,
      userId: 8,
      name: 'Bertine Stit',
      email: 'bstit7@wikipedia.org',
      gender: 'F',
      age: 54,
      status: 'Pending',
    },
    {
      appointmentId: 9,
      userId: 9,
      name: 'Terrence Bauchop',
      email: 'tbauchop8@house.gov',
      gender: 'M',
      age: 38,
      status: 'Rejected',
    },
    {
      appointmentId: 10,
      userId: 10,
      name: 'Ardeen Doggett',
      email: 'adoggett9@unesco.org',
      gender: 'M',
      age: 46,
      status: 'Rejected',
    },
    {
      appointmentId: 11,
      userId: 11,
      name: 'Gianina Tremayle',
      email: 'gtremaylea@posterous.com',
      gender: 'M',
      age: 56,
      status: 'Approved',
    },
    {
      appointmentId: 12,
      userId: 12,
      name: 'Flemming Sonschein',
      email: 'fsonscheinb@surveymonkey.com',
      gender: 'M',
      age: 35,
      status: 'Pending',
    },
    {
      appointmentId: 13,
      userId: 13,
      name: 'Gregoor Pollicott',
      email: 'gpollicottc@miitbeian.gov.cn',
      gender: 'F',
      age: 21,
      status: 'Approved',
    },
    {
      appointmentId: 14,
      userId: 14,
      name: 'Freddy Nucator',
      email: 'fnucatord@auda.org.au',
      gender: 'F',
      age: 50,
      status: 'Approved',
    },
    {
      appointmentId: 15,
      userId: 15,
      name: 'Cy Scocroft',
      email: 'cscocrofte@home.pl',
      gender: 'M',
      age: 21,
      status: 'Approved',
    },
    {
      appointmentId: 16,
      userId: 16,
      name: 'Andreea Pupe',
      email: 'andreeapupe@yahoo.com',
      gender: 'F',
      age: 22,
      status: 'Approved',
    },
  ]

  expandCollapse(): void {
    this.state = this.state === 'collapsed' ? 'expanded' : 'collapsed'
  }

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    public dialog: MatDialog
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(FilterModalComponent, {
      height: '400px',
      width: '400px',
    })
  }

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

  increment_appointmentsNumber(): void {
    this.appointmentsNumber++
    this.appointmentsNo = this.appointmentsNumber / 2
  }

  increment_approvedNumber(): void {
    this.approvedNumber++
    this.approvedNo = this.approvedNumber / 2
  }

  increment_rejectedNumber(): void {
    this.rejectedNumber++
    this.rejectedNo = this.rejectedNumber / 2
  }

  increment_pendingNumber(): void {
    this.pendingNumber++
    this.pendingNo = this.pendingNumber / 2
  }

  ngOnInit(): void {}
}
