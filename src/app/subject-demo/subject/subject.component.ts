import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    // observable
    const observable = new Observable(obj => obj.next(Math.random()));
    observable.subscribe(res => console.log("Response from observable : ", res));
    observable.subscribe(res => console.log("Response from observable : ", res));

    // subject
    const subject = new Subject();
    subject.subscribe(res => console.log("Response from subject : ", res));
    subject.subscribe(res => console.log("Response from subject : ", res));

    subject.next(Math.random());
  }
}
