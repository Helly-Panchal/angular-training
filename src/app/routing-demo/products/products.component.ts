import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public goToHome(): void {
    this.router.navigate(['/']);
  }
  public goToAccounts(): void {
    // this.router.navigate(['accounts'], { relativeTo: this.activatedRoute });
    this.router.navigate(['/accounts']);
  }
}
