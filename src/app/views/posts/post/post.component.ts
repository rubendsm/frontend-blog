import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post : any;

  constructor(private postService:PostService) { }


  ngOnInit() {
    let postId = localStorage.getItem('post');
    this.getPostsById(postId);
  }

  getPostsById(id: any) {
    this.postService.getPostById(id).subscribe(post => {
      this.post = post;
    }, err => {
      console.log('Erro ao listar posts', err);
    })
   }

}
