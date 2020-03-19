import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CrudserviceService } from '../crudservice.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { publishFacade } from '@angular/compiler';
import { AngularEditorConfig } from '@kolkov/angular-editor';
enum CheckBoxType { presignup,sluglogin, dashboard,NONE};
@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit{
 course_name:"";
Levels :Array <any> =[];
categories :Array <any> =[];
videoss:Array<any>=[];
reactive:FormGroup;
currentlyChecked: CheckBoxType;
check_box_type = CheckBoxType;
courseVideo :any;
vid=[];
v:Array<any>=[];
text:Array<any>=[];
mode:String;
// editorConfig: AngularEditorConfig = {
//   editable: true,
//     spellcheck: true,
//     height: 'auto',
//     minHeight: '0',
//     maxHeight: 'auto',
//     width: 'auto',
//     minWidth: '0',
//     translate: 'yes',
//     enableToolbar: true,
//     showToolbar: true,
//     placeholder: 'Enter text here...',
//     defaultParagraphSeparator: '',
//     defaultFontName: '',
//     defaultFontSize: '',
//     fonts: [
//       {class: 'arial', name: 'Arial'},
//       {class: 'times-new-roman', name: 'Times New Roman'},
//       {class: 'calibri', name: 'Calibri'},
//       {class: 'comic-sans-ms', name: 'Comic Sans MS'}
//     ],
//     customClasses: [
//     {
//       name: 'quote',
//       class: 'quote',
//     },
//     {
//       name: 'redText',
//       class: 'redText'
//     },
//     {
//       name: 'titleText',
//       class: 'titleText',
//       tag: 'h1',
//     },
//   ],
//   uploadUrl: 'v1/image',
//   uploadWithCredentials: false,
//   sanitize: true,
//   toolbarPosition: 'top',
//   toolbarHiddenButtons: [
//     ['bold', 'italic'],
//     ['fontSize']
//   ]
// };
  constructor(private course:CrudserviceService,private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.viewlevelname();
    this.viewcategoryname();
    this.viewvideos();
    this.form();
    
  }
  // ngAfterViewInit()
  // {
  //   this.router.navigateByUrl("/view");
  // }

viewvideos()
{
  this.course.viewvideos().subscribe((res :any)=>{
    this.videoss=res;
    console.log(res);
});
}
viewlevelname()
{
this.course.viewlevels().subscribe((res :any)=>{
  this.Levels=res;
  console.log(res);
});
}
viewcategoryname()
{
this.course.viewcategories().subscribe((res : any)=>{
  this.categories=res;
  console.log(res);
});
}
back(){
  this.router.navigateByUrl("/view");
}
form(){
this.reactive=this.formbuilder.group({
  coursename:[''],
  levels:[''],
  categories:[''],
  tags:[''],
  slug:[''],
  leveloverride:[''],
  enrollment:[''],
  completion:[''],
  desc:[''],
  metakey:[''],
  metadesc:[''],
  video:[''],
  textname:[''],
  htmlContent:['']
});

}
selectCheckBox(targetType: CheckBoxType) {
  // If the checkbox was already checked, clear the currentlyChecked variable
  if(this.currentlyChecked === targetType) {
    this.currentlyChecked = CheckBoxType.NONE;
    return;
  }

  this.currentlyChecked = targetType;
}
conversionvideoObject()
{
  for(var i=0;i<this.reactive.get('video').value.length;i++)
  {
    if(this.reactive.get('video').value[i]){  
      //console.log(this.reactive.get('video').value[i]);
      this.vid[i]=this.reactive.get('video').value[i];
      
    // this.courseVideo=   {video: {id: this.reactive.get('video').value}};
    }
  }
  for(i=0;i<this.vid.length;i++){
    var obj={
      id:this.vid[i]
    }
    var obj1={
      videos:obj
    }
      this.v.push(obj1)
  
  }
  console.log(this.v)
}
conversionTextObject()
{

  var obj={name:this.reactive.get('textname').value,
content:this.reactive.get('htmlContent').value}
this.text.push(obj)
}
publish(){
  //console.log('slug==>'+this.reactive.get('slug').value);
  this.mode="p";
  this.conversionvideoObject();
  this.course.addcourse(this.reactive.value,this.currentlyChecked,this.v,this.mode,this.text).subscribe((res :any)=>{
 this.router.navigateByUrl("/view");
    
});
}
draft()
{
  this.mode='d';
  this.conversionvideoObject();
  this.course.addcourse(this.reactive.value,this.currentlyChecked,this.v,this.mode,this.text).subscribe((res :any)=>{
    this.router.navigateByUrl("/view");
  });

  }
}

