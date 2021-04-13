import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:3000/posts'; // url base api posts ruby


  // injetando o HttpClient
  constructor(private http: HttpClient) { }

    // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  
 
  // obter todos os posts
  getAllPosts() {
    return this.http.get(this.url + '.json') 
  
  }

   // Obtem um post pelo id
   getPostById(id: number) {
    return this.http.get(this.url + '/' + id + '.json')
   
  }



}
