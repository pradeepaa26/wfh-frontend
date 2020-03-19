import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewcourseComponent } from './newcourse/newcourse.component';
import { ViewComponent } from './view/view.component';
import { DetailsComponent } from './details/details.component';
import { VideosComponent } from './videos/videos.component';
import { VideoviewComponent } from './videoview/videoview.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {path: "login",component:LoginComponent},
  {path: "course",component:NewcourseComponent} ,
  {path: "view",component:ViewComponent},
  {path: "videos",component:VideosComponent},
  {path:"view/update",component:UpdateComponent},
  {path:"view/details",component:DetailsComponent},
  {path:"view/details/video",component:VideoviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
