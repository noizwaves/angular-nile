import {provide} from '@angular/core';
import {beforeEach, beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {ProductsComponent} from './products.component';
import {ProductService} from './services/index';

describe('Component: Products', () => {
  let builder:TestComponentBuilder;
  let productService:ProductService;

  beforeEach(() => {
    productService = new ProductService();
  });

  beforeEachProviders(() => [
    provide(ProductService, {useValue: productService}),
    ProductsComponent,
  ]);

  beforeEach(inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    builder = tcb;
  }));

  it('should inject the component', inject([ProductsComponent], (component:ProductsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder
      .createAsync(ProductsComponent).then((f:ComponentFixture<ProductsComponent>) => {
        f.detectChanges();

        expect(f.componentInstance).toBeTruthy();
        expect(f.nativeElement).toBeTruthy();

        expect(f.nativeElement.querySelectorAll('.product').length).toBe(5);

        expect(f.nativeElement.querySelectorAll('.product .product-name')[0].textContent)
          .toBe('Goal Zero 23000 Yeti 400 Solar Generator');
        expect(f.nativeElement.querySelectorAll('.product .product-price')[0].textContent)
          .toBe('$300.00');
      });
  }));
});
