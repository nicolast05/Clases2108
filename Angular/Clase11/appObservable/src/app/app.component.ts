import { Component } from '@angular/core';
import { observable, interval } from 'rxjs';
import { Student } from './student.model';
import { StudentService } from './student.service';
import { pluck, delay, map, filter } from 'rxjs/operators'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students: Student[] = [];

  constructor(private studentservice: StudentService) { }

  ngOnInit() {
    const studentsObservable = this.studentservice.getStudents();

    studentsObservable.subscribe((studentsData: Student[]) => {
      this.students = studentsData;



    });

    studentsObservable
      .pipe(

        delay(3000),
        map((dato: any) => {
          const aMay = dato.map(el => {
            el.name = el.name.toUpperCase()
            return el
          })
          return aMay
        })
      )
      .subscribe((studentsData: Student[]) => {
        this.students = studentsData;

      });

    interval(2000)
      .pipe(
        filter(el => el % 2 == 0),
    )
      .subscribe(
        data => console.log("Dato", data)
      );



  }

}
