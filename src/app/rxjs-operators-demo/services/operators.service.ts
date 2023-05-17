import { Injectable } from '@angular/core';
import { Observable, concatWith, from, interval, merge, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  // of operator with numbers
  public ofOperator(): Observable<number> {
    const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    return numbers$;
  }

  // of operator with array of object
  public ofOperatorWithList(): Observable<any[]> {
    const userData = [
      {
        id: 1,
        role: 'admin',
        name: 'ABC'
      },
      {
        id: 2,
        role: 'user',
        name: 'DEF'
      },
    ];
    const data$ = of(userData);
    return data$;
  }

  // from operator
  public fromOperator(): Observable<number> {
    const numbersArray$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return numbersArray$;
  }

  // concatWith operator
  public concatWithOperator(): Observable<number> {
    const source1$ = of(1, 3, 5, 7, 9, 11);
    const source2$ = of(2, 4, 6, 8, 10);

    const concated$ = source1$.pipe(concatWith(source2$));
    return concated$;
  }

  // merge operator
  public mergeOperator(): Observable<number> {
    const source1$ = interval(1000);
    const source2$ = interval(2000);

    return merge(source1$, source2$);
  }
}
