import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    }, err => {
      console.log('Erro ao listar posts', err);
    })
   }

   openPost(id: any) {
    localStorage.setItem('post', id);
   }


}
