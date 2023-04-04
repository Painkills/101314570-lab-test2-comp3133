
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})

export class MissiondetailsComponent implements OnInit {
  mission: any;

  constructor (
    private route: ActivatedRoute,
    private httpclient: HttpClient
  ) {}

  ngOnInit(){
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');
    this.mission = this.httpclient.get("https://api.spacexdata.com/v3/launches/" + flightNumber).subscribe(
      (data) => {
        this.mission = data;
      })
  }
}
