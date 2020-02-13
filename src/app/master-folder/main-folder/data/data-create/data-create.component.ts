import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';
import { IStudent } from '../../../models/IStudent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-create',
  templateUrl: './data-create.component.html',
  styleUrls: ['./data-create.component.scss']
})
export class DataCreateComponent implements OnInit {

  constructor(private _studentService:StudentService, private route:Router) { }
  data={};

  ngOnInit() {
  }
  addData(){
    this._studentService.createStudent(this.data).subscribe((d:{})=>{
      console.log(this.data);
      this.route.navigateByUrl('/data/data-list');
    })
  }

}
