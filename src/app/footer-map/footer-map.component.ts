import { Component, OnInit, AfterViewInit } from '@angular/core'
import * as L from 'leaflet'

@Component({
  selector: 'app-footer-map',
  templateUrl: './footer-map.component.html',
  styleUrls: ['./footer-map.component.css'],
})
export class FooterMapComponent implements OnInit, AfterViewInit {
  private map

  private initMap(): void {
    this.map = L.map('map', {
      center: [45.74708898863349, 21.231407868159486],
      zoom: 18,
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

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap()
  }
}
