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

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  shuffleArray(array: any[]) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  constructor(private JosonData: JSONPlaceholderService) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.JosonData.getData().subscribe((data: any) => {
      this.data = data;
      this.shuffleArray(data)
    })
  }

  d = new Date();
  n = this.d.toLocaleString([], { hour12: true });

}
