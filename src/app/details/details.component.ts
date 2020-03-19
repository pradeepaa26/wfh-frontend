import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  object: Array<any> = [];
  constructor(private route: ActivatedRoute,
    private router: Router, private obj: CrudserviceService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.id = params['id'];
      });
    this.view();
  }
  view() {
    // console.log(this.id)
    this.obj.viewdetails(this.id).subscribe((res: any) => {
      this.object = res
      this.object = arrayparse(this.object);
      //this function is to make the response (in json) as array because ngFor is only for arrays.In backend if returned as array this is not needed. 
      function arrayparse(object) {
        return new Array(object);
      }
      console.log(this.object)
    }, error => {
      console.log(error);
    });
  }
  back() {
    this.router.navigateByUrl("/view");
  }
}
