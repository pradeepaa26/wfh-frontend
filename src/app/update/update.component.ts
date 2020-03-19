import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CrudserviceService } from '../crudservice.service';
import { Router, ActivatedRoute } from '@angular/router';
enum CheckBoxType { presignup, sluglogin, dashboard, NONE };
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  Levels: Array<any> = [];
  categories: Array<any> = [];
  videoss: Array<any> = [];
  //reactive:FormGroup;
  currentlyChecked: CheckBoxType;
  check_box_type = CheckBoxType;
  id: number;
  object: Array<any> = [];
  constructor(private update: CrudserviceService, private router: Router, private formbuilder: FormBuilder, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeroute.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.view();
    this.viewlevelname();
    this.viewcategoryname();
    this.viewvideos();
    // this.form();
  }
  view() {
    //console.log(this.id)
    this.update.viewdetails(this.id).subscribe((res: any) => {
      this.object = res
      console.log(res)
      this.reactive.patchValue({
        coursename: res.name,
        levels: res.levels.name,
        categories: res.categories.name,
        slug: res.slug,
        tags: res.tags,
        leveloverride: res.levelOverride,
        enrollment: res.enrollmentPoints,
        completion: res.completionPoints,
        desc: res.description,
        metakey: res.meta_key,
        metadesc: res.meta_des,
        

      })

      this.object = arrayparse(this.object);
      //this function is to make the response (in json) as array because ngFor is only for arrays.In backend if returned as array this is not needed. 
      function arrayparse(object) {
        return new Array(object);
      }
      //console.log(this.object1)
    }, error => {
      console.log(error);
    });

  }

  reactive = new FormGroup({
    coursename: new FormControl(),
    levels: new FormControl(),
    categories: new FormControl(),
    slug: new FormControl(),
    tags: new FormControl(),
    leveloverride: new FormControl(),
    enrollment: new FormControl(),
    completion: new FormControl(),
    desc: new FormControl(),
    metakey: new FormControl(),
    metadesc: new FormControl(),
    video: new FormControl()
  })
  //   loadvalue()
  //   {
  // this.reactive.patchValue({
  // coursename:this.object
  // });
  //   }
  viewvideos() {
    this.update.viewvideos().subscribe((res: any) => {
      this.videoss = res;
      // console.log(res);
    });
  }
  viewlevelname() {
    this.update.viewlevels().subscribe((res: any) => {
      this.Levels = res;
      //console.log(this.Levels);
    });
  }
  viewcategoryname() {
    this.update.viewcategories().subscribe((res: any) => {
      this.categories = res;
      // console.log(res);
    });
  }
  back() {
    this.router.navigateByUrl("/view");
  }
  selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }

    this.currentlyChecked = targetType;
  }

  // form(){
  //   this.reactive=this.formbuilder.group({
  //     coursename:[''],
  //     levels:[''],
  //     categories:[''],
  //     tags:[''],
  //     slug:[''],
  //     leveloverride:[''],
  //     enrollment:[''],
  //     completion:[''],
  //     desc:[''],
  //     metakey:[''],
  //     metadesc:[''],
  //     video:[''],
  //     //textname:[''],
  //     //htmlContent:['']
  //   });

  //   }
}
