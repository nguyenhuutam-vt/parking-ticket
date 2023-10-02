import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogId: number = 0;
  blogDetail: any;
  userDetail: any;
  recentBlog: any[] = [];
  commentBlog: any[] = [];
  constructor(private http: HttpClient, private activate: ActivatedRoute) {
    this.activate.params.subscribe((res: any) => {
      this.blogId = res.id;
      console.log(res.id, 'id');
      this.openBlog(this.blogId);
    });
  }

  ngOnInit(): void {}

  openBlog(id: any) {
    this.http
      .get('https://onlinetestapi.gerasim.in/api/Blog/GetBlogById?blogid=' + id)
      .subscribe((res: any) => {
        this.blogDetail = res.data;
        console.log(res.data, 'open');
        this.getUserDetail();
        this.getRecentBlog();
        this.getComment();
      });
  }
  getUserDetail() {
    this.http
      .get(
        'https://onlinetestapi.gerasim.in/api/Blog/GetUserDetailsById?id=' +
          this.blogDetail.userId
      )
      .subscribe((res: any) => {
        this.userDetail = res.data;
        console.log(res.data, 'data');
      });
  }

  getRecentBlog() {
    this.http
      .get(
        'https://onlinetestapi.gerasim.in/api/Blog/GetRecentBlogsByUserId?id=' +
          this.blogDetail.userId
      )
      .subscribe((res: any) => {
        console.log(res.data, 'blog');
        this.recentBlog = res.data;
      });
  }

  getComment() {
    this.http
      .get(
        'https://onlinetestapi.gerasim.in/api/Blog/GetCommentsByBlogId?blogid=' +
          this.blogDetail.userId
      )
      .subscribe((res: any) => {
        console.log(res.data, 'comment');

        this.commentBlog = res.data;
      });
  }
}
