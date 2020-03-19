import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
  

  constructor(private http:HttpClient) { 

  }
  viewcourse(){
    return this.http.get("http://localhost:9000/view");
  }
viewlevels()
{
  return this.http.get("http://localhost:9000/viewlevel");
}
viewcategories()
{
  return this.http.get("http://localhost:9000/viewcategory");
}
viewdetails(id:number)
{
  //console.log(id)
  return this.http.get("http://localhost:9000/viewbyid/"+id);
}
viewvideos()
{
  return this.http.get("http://localhost:9000/viewvideos");
}
viewvideosbyid(id: number)
{
  return this.http.get("http://localhost:9000/viewvideosbyid/"+id);
}

modifystatus(id:number):Observable<any>
{
  return this.http.get("http://localhost:9000/modifystatus/"+id);
}
delete(id:number)
{
  return this.http.delete("http://localhost:9000/remove/"+id);
}

addcourse(form : any, currentlyChecked: any, coursevideo:any,mode:any,text:any){
  const body=
    {
      "name": form.coursename,
      "levels": {
          "id": form.levels    
      },
      "categories": {
          "id": form.categories
      },
      // "texts": [
      //     {
              
      //         "name": "j88",
      //         "content": "The database management system (DBMS) is the software that interacts with end users, applications, and the database itself to capture and analyze the data. The DBMS software additionally encompasses the core facilities provided to administer the database. The sum total of the database, the DBMS and the associated applications can be referred to as a \"database system\". Often the term \"database\" is also used to loosely refer to any of the DBMS, the database system or an application associated with the database"
      //     }
      // ],
      "tag": form.tags,
      "slug": form.slug,
      "available_for": currentlyChecked,
      "description":form.desc,
      "meta_key": form.metakey,
      "meta_desc":form.metadesc,
      "created_by": "admin",
      "modified_by": null,
      "created_on": "2020-01-31T18:30:01.000+0000",
      "modified_on": null,
      "enrollmentPoints": form.enrollment,
      "completionPoints": form.completion,
      "mode": mode,
      "active": true,
      "levelOverride": form.leveloverride,
     "courseSubscribedVideoObj": coursevideo,
     "texts":text
  }
  return this.http.post("http://localhost:9000/new",{...body});
}
}


