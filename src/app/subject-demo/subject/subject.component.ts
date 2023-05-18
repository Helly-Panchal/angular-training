import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    // observable
    const observable = new Observable(obj => obj.next(Math.random()));
    observable.subscribe(res => console.log("\n\nResponse from observable : ", res));
    observable.subscribe(res => console.log("Response from observable : ", res));

    // subject
    const subject = new Subject();
    subject.subscribe(res => console.log("\n\nResponse from subject : ", res));
    subject.subscribe(res => console.log("Response from subject : ", res));
    subject.next(Math.random());

    // behavior subject
    const behaviorSubject = new BehaviorSubject("Default sentence from behavior subject..!!");
    behaviorSubject.next("Hello again from behavior subject.");
    behaviorSubject.next("Hello again from behavior subject-2.");
    behaviorSubject.subscribe(res => console.log("\n\nResponse from behavior subject : ", res));
    behaviorSubject.next("Hello again from behavior subject-3.");
  }
}
