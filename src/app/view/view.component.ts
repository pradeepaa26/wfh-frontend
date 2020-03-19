import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
object: Array <any>=[];

  constructor(private obj:CrudserviceService, private router:Router) { }

  ngOnInit(): void {
  this.view();
    }

  view(){
    this.obj.viewcourse().subscribe((res :any)=>{
      this.object=res;
      console.log(res);
  });

}
status(id:number)
{
  this.obj.modifystatus(id).subscribe((res :any)=>{
    this.view();  
    console.log(res);
      //alert("Are you sure");
      },error =>
      {
        this.view();
        console.log(error);
      });
}
new(){
  this.router.navigateByUrl("/course");
}
delete(id:any)
{
  this.obj.delete(id).subscribe((res:any)=>{
    this.view();
    console.log("Delete this course");
    // alert(res);
  },error=>{
    this.view();
    console.log(error)
  });
}
// edit(values:any)
// {
//   this.router.navigate[`/update/${values}`];
// }
}
