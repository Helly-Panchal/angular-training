import { Injectable } from '@angular/core';
import { Observable, concatWith, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {

  // of operator with numbers
  public ofOperator(): Observable<number> {
    let numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    return numbers$;
  }

  // of operator with array of object
  public ofOperatorWithList(): Observable<any[]> {
    let userData = [
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
    let data$ = of(userData);
    return data$;
  }

  // from operator
  public fromOperator(): Observable<number> {
    let numbersArray$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return numbersArray$;
  }

  // concatWith operator
  public concatWith(): Observable<number> {
    let source1$ = of(1, 3, 5, 7, 9, 11);
    let source2$ = of(2, 4, 6, 8, 10);

    let concated$ = source1$.pipe(concatWith(source2$));
    return concated$;
  }
}
