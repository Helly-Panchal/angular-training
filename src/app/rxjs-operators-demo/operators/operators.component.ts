import { Component, OnDestroy } from '@angular/core';
import { OperatorsService } from '../services/operators.service';
import { Subscription, from } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnDestroy {
  public subscriptions: Subscription[] = [];

  constructor(private operatorService: OperatorsService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  // of operator
  public onClickOfOperator(): void {
    this.subscriptions.push(this.operatorService.ofOperator().subscribe(res => {
      console.log(res);
    }));

    this.subscriptions.push(this.operatorService.ofOperatorWithList().subscribe(res => {
      console.log(res);
    }))
  }

  // from operator
  public onClickFromOperator(): void {
    this.subscriptions.push(this.operatorService.fromOperator().subscribe(res => {
      console.log(res);
    }))
  }

  // concatWith operator
  public onClickConcatWithOperator(): void {
    this.subscriptions.push(this.operatorService.concatWith().subscribe(res => {
      console.log(res);
    }))
  }
}


