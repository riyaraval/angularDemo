import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../../../models/IStudent';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.scss']
})
export class DataEditComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private _studentSevice:StudentService,private route:Router) { }
  id:number;
  data={};
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>this.id=parseInt(params
      .get('id')));
      console.log(this.id);
    this._studentSevice.getStudent(this.id).subscribe((d:{})=>{
      this.data=d;
    })
  }
  
  updateData(){
    this._studentSevice.updateStudent(this.data).subscribe(d=>{
      this.route.navigateByUrl('/data/data-list');
    })
  }
}
