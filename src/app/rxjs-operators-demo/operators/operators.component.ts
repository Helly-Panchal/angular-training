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
      console.log("Of operator : ", res);
    }));

    this.subscriptions.push(this.operatorService.ofOperatorWithList().subscribe(res => {
      console.log("Of operator with list : ", res);
    }))
  }

  // from operator
  public onClickFromOperator(): void {
    this.subscriptions.push(this.operatorService.fromOperator().subscribe(res => {
      console.log("From operator : ", res);
    }))
  }

  // concatWith operator
  public onClickConcatWithOperator(): void {
    this.subscriptions.push(this.operatorService.concatWithOperator().subscribe(res => {
      console.log("ConcatWith operator : ", res);
    }))
  }

  // merge operator
  public onClickMergeOperator(): void {
    this.subscriptions.push(this.operatorService.mergeOperator().subscribe(res => {
      console.log("Merge operator : ", res);
    }))
  }

  // map operator
  public onClickMapOperator(): void {
    this.subscriptions.push(this.operatorService.mapOperator().subscribe(res => {
      console.log("Map operator : ", res);
    }))
  }
}


