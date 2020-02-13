import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IStudent } from '../models/IStudent';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";  
@Injectable({
    providedIn:'root'
})

export class StudentService{

  constructor(private http:HttpClient,private SpinnerService: NgxSpinnerService){}

  // private _url:string="https://jsonplaceholder.typicode.com/posts";

  private _url:string=" http://localhost:3000/students";


  getStudents():Observable<IStudent[]>{ 
      return this.http.get<IStudent[]>(this._url);
  }
  getStudent(id):Observable<IStudent>{
    return this.http.get<IStudent>(this._url+'/'+id);
  }
  createStudent(data):Observable<IStudent> {  
    return this.http.post<IStudent>(this._url,{'id':data.id,'name':data.name, 'semester':data.semester}) ; 
  } 
  updateStudent(data):Observable<IStudent[]>{  
    return this.http.put<IStudent[]>(this._url + '/' + data.id,{'id':data.id,'name':data.name, 'semester':data.semester})  
  }
  deleteStudent(id):Observable<IStudent> {
    return this.http.delete<IStudent>(this._url + '/' + id);  
  }
  // getStudentsData(page,limit,sort):Observable<IStudent[]>{
  //   return this.http.get<IStudent[]>(this._url+'?_page='+page+'&_limit='+limit+'&_sort='+sort)
  // }
}