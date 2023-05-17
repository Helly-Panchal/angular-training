import { Component, OnDestroy } from '@angular/core';
import { OperatorsService } from '../services/operators.service';
import { Subscription, from, take } from 'rxjs';

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

  // concatMap operator
  public onClickConcatMapOperator(): void {
    this.subscriptions.push(this.operatorService.concatMapOperator().subscribe(res => {
      console.log("ConcatMap operator : ", res);
    }));

    // concatMap operator with api
    this.subscriptions.push(this.operatorService.concatMapWithAPI().subscribe(res => {
      console.log("ConcatMap operator : ", res);
    }));
  }

  // mergeMap operator
  public onClickMergeMapOperator(): void {
    this.subscriptions.push(this.operatorService.mergeMapOperator().subscribe(res => {
      console.log("MergeMap operator : ", res);
    }))
  }

  public onClickSwitchMapOperator(): void {
    this.subscriptions.push(this.operatorService.switchMapOperator().subscribe(res => {
      console.log("SwitchMap operator : ", res);
    }))
  }

  public onClickTakeOperator(): void {
    this.subscriptions.push(this.operatorService.concatMapOperator().pipe(take(2)).subscribe(res => {
      console.log("Take operator : ", res);
    }))
  }
}


