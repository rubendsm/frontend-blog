import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { PostsComponent } from './views/posts/posts.component';
import { PostComponent } from './views/posts/post/post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
