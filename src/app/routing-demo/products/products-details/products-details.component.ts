import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent implements OnInit, OnDestroy {
  public productId: any;
  public productName!: string;
  public parameterSubscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['productId'];
    this.productName = this.activatedRoute.snapshot.params['productName'];

    this.parameterSubscription = this.activatedRoute.params.subscribe(
      (parameter: Params) => {
        this.productId = parameter['productId'];
        this.productName = parameter['productName'];
      }
    );
  }

  ngOnDestroy() {
    this.parameterSubscription.unsubscribe();
  }
}
