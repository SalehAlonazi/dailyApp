import { getAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, MaxValidator, Validators } from '@angular/forms';
import { Component, NgModule, OnInit } from '@angular/core';
import { JSONPlaceholderService } from 'src/app/services/jsonplaceholder.service'
import { AuthService } from 'src/app/services/auth-service.service'
import { PostComponent } from '../post/post.component';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  data: Array<any>
  postform: boolean = false;
  upost = new FormGroup({
    title: new FormControl(),
    body: new FormControl('', [Validators.maxLength(144)])
  })

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  shuffleArray(array: any[]) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  constructor(private JosonData: JSONPlaceholderService, public authService: AuthService, private comments: PostComponent) {
    this.data = new Array<any>();

  }


  userPosted(title: any, body: any) {
    this.data.unshift({ title, body })
    console.log(this.data)
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
