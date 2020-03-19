import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  object: Array <any>=[];
  constructor(private obj:CrudserviceService) { }

  ngOnInit(): void {
    this.view();
  }
  view(){
    this.obj.viewvideos().subscribe((res :any)=>{
      this.object=res;
      console.log(res);
  });

}
}
