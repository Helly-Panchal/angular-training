import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperatorsService {
  public ofOperator(): Observable<number> {
    let numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    return numbers$;
  }

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
}
