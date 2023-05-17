import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

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
}
