import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JSONPlaceholderService } from 'src/app/services/jsonplaceholder.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  data: Array<any>
  addComentForm = new FormGroup({
    title: new FormControl,
    body: new FormControl
  })
  constructor(private JosonData: JSONPlaceholderService) {
    this.data = new Array<any>();

  }

  ngOnInit(): void {
    this.JosonData.getData().subscribe((data: any) => {
      this.data = data;
    })
  }
  onEnter(value: string, value1?: string) {
    this.data.unshift({
      title: this.addComentForm.get('title')?.value,
      body: this.addComentForm.get('body')?.value,
      id: "1",
    })
  }

}



