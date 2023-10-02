import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './page/blog/blog.component';
import { ProfileComponent } from './page/profile/profile.component';
import { BlogsComponent } from './page/blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [AppComponent, BlogComponent, ProfileComponent, BlogsComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
