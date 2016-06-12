import {Component, OnInit} from '@angular/core';
import {ProductService} from './services/index';
import {Product} from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'products.component.html',
})
export class ProductsComponent implements OnInit {
  private products:Product[];

  constructor(private productService:ProductService) {
  }

  ngOnInit() {
    this.productService.findAll().subscribe(products => {
      this.products = products;
    });
  }
}
