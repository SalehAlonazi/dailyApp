import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JSONPlaceholderService } from 'src/app/services/jsonplaceholder.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  data: Array<any>
  constructor(private JosonData: JSONPlaceholderService) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.JosonData.getData().subscribe((data: any) => {
      this.data = data;
    })
  }



}
