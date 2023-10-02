import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}
  blogList: any[] = [];
  ngOnInit(): void {
    this.loadAllBlog();
  }
  loadAllBlog() {
    this.http
      .get('https://onlinetestapi.gerasim.in/api/Blog/GetAllBlogs')
      .subscribe((res: any) => {
        this.blogList = res.data;
        console.log(res.data);
      });
  }
  openBlog(id: any) {
    this.router.navigate(['/blogs', id]);
  }
}
