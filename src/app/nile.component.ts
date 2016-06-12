import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {ProductsComponent} from './+products';
import {ProductService} from './+products/index';

@Component({
  moduleId: module.id,
  selector: 'nile-app',
  templateUrl: 'nile.component.html',
  styleUrls: ['nile.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    ProductService,
  ]
})
@Routes([
  {path: '/products', component: ProductsComponent}
])
export class NileAppComponent {
  title = 'nile works!';
}
