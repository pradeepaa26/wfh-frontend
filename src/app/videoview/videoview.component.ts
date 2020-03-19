import { Component, OnInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videoview',
  templateUrl: './videoview.component.html',
  styleUrls: ['./videoview.component.css']
})
export class VideoviewComponent implements OnInit {
video:Array<any> =[];
sub:any;
id:number;
  constructor(private route: ActivatedRoute,
    private router: Router,private obj:CrudserviceService) { }

  ngOnInit(): void {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.id = params['id'];
    });
    this.view();
  }
  view()
  {
  console.log(this.id)
  this.obj.viewvideosbyid(this.id).subscribe((res:any)=>{
    this.video=res;
    this.video=arrayparse(this.video);
    //this function is to make the response (in json) as array because ngFor is only for arrays.In backend if returned as array this is not needed. 
   function arrayparse(video)
   {
     return new Array(video);
   }
   console.log(this.video)
 },error=>{
   console.log(error);
 });
 }
}
