import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit{
  launchList: any;
  searchText = '';

  constructor (
    private httpclient: HttpClient
  ) {}

  ngOnInit() {
    this.httpclient.get("https://api.spacexdata.com/v3/launches").subscribe(
      (data) => {
        this.launchList = data as Mission[];
      })
  }

}
