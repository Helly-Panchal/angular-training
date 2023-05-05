import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['productId'];
    this.productName = this.activatedRoute.snapshot.params['productName'];

    this.parameterSubscription = this.activatedRoute.params.subscribe(
      (parameter: Params) => {
        this.productId = parameter['productId'];
        this.productName = parameter['productName'];
      }
    );

    // fetching Query params and Fragments using router
    this.activatedRoute.queryParams.subscribe((queryParameter: Params) => {
      console.log('query params : ', queryParameter);
    });
    this.activatedRoute.fragment.subscribe((fragment) => {
      console.log('this.activatedRoute.fragment :- ', fragment);
    });
  }

  ngOnDestroy() {
    this.parameterSubscription.unsubscribe();
  }

  public closeProductDetails(): void {
    this.router.navigate(['/products']);
  }
}
