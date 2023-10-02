import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './page/blog/blog.component';
import { ProfileComponent } from './page/profile/profile.component';
import { BlogsComponent } from './page/blogs/blogs.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'blogs/:id',
    component: BlogsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
