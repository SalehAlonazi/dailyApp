import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  imgSrc = "assets/images/SNAP_20200328-102042_auto_x2.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
