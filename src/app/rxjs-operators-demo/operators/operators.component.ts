import { Component, OnDestroy, OnInit } from '@angular/core';
import { OperatorsService } from '../services/operators.service';
import { Observable, Subject, Subscription, catchError, debounceTime, distinctUntilChanged, forkJoin, from, interval, of, switchMap, take, takeUntil, tap, timer } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnDestroy, OnInit {
  public subscriptions: Subscription[] = [];
  public debounceTimeExampleForm!: FormGroup;
  searchText!: string;
  breeds$!: Observable<any>;
  searchBreed$ = new Subject<string>();

  constructor(private operatorService: OperatorsService) { }

  ngOnInit(): void {
    this.debounceTimeExampleForm = new FormGroup({
      description: new FormControl(null, Validators.required)
    });

    this.debounceTimeExampleForm.valueChanges.pipe(debounceTime(200)).subscribe(value => {
      console.log(value);
    });

    this.searchBreed();
  }

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

  // switchMap operator
  public onClickSwitchMapOperator(): void {
    this.subscriptions.push(this.operatorService.switchMapOperator().subscribe(res => {
      console.log("SwitchMap operator : ", res);
    }))
  }

  // take operator
  public onClickTakeOperator(): void {
    this.subscriptions.push(this.operatorService.concatMapOperator().pipe(take(2)).subscribe(res => {
      console.log("Take operator : ", res);
    }))
  }

  // takeuntill operator
  public onClickTakeUntilOperator(): void {
    this.subscriptions.push(this.operatorService.takeUntilOperator().pipe(takeUntil(timer(3000))).subscribe(res => {
      console.log("TakeUntil operator : ", res);
    }))
  }

  // forkJoin
  public onClickForkJoinOperator(): void {
    const obs1$ = this.operatorService.getDogBreed('hound');
    const obs2$ = this.operatorService.getDogBreed('mastiff');
    const obs3$ = this.operatorService.getDogBreed('retriever');

    forkJoin([obs1$, obs2$, obs3$]).subscribe((res) => {
      console.log("forkJoin data: ", res);
    }),
      (error: any) => {
        console.log("Error occured ", error);
      }
  }

  search() {
    this.searchBreed$.next(this.searchText);
  }

  searchBreed() {
    this.breeds$ = this.searchBreed$.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
      switchMap(searchText => this.searchBreedApi(searchText))
    );
  }

  searchBreedApi(searchText: string): Observable<any> {
    if (searchText) {
      return from(this.operatorService.getDogBreed(searchText))
        .pipe(
          catchError((error) => {
            return of({});
          }),
          tap(() => console.log('Searching......'))
        );
    }
    return of({});
  }

}


