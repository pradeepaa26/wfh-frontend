import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewcourseComponent } from './newcourse/newcourse.component';
import { ViewComponent } from './view/view.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CrudserviceService } from './crudservice.service';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { VideosComponent } from './videos/videos.component';
import { VideoviewComponent } from './videoview/videoview.component';
import { VideopipePipe } from './videopipe.pipe';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewcourseComponent,
    ViewComponent,
    DetailsComponent,
    NavbarComponent,
    VideosComponent,
    VideoviewComponent,
    VideopipePipe,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularEditorModule
  ],
  providers: [
    HttpClient,
    CrudserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
