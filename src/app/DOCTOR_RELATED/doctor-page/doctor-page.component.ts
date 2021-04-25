import { Component, AfterViewInit } from '@angular/core'
import * as L from 'leaflet'
import { MarkerService } from '../../../assets/data/marker.service'

const iconRetinaUrl = '../../../assets/marker-icon.png'
const iconUrl = '../../../assets/marker-icon.png'
const shadowUrl = '../../../assets/marker-icon.png'
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
})
L.Marker.prototype.options.icon = iconDefault

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css'],
})
export class DoctorPageComponent implements AfterViewInit {
  private map

  private initMap(): void {
    this.map = L.map('map', {
      center: [45.74708898863349, 21.231407868159486],
      zoom: 17,
    })

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 22,
        minZoom: 1,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    )

    tiles.addTo(this.map)
  }

  constructor(private markerService: MarkerService) {}

  ngAfterViewInit(): void {
    this.initMap()
    this.markerService.makeCapitalMarkers(this.map)
  }
}
