import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Product} from '../shared/product.model';

export class ProductService {
  findAll():Observable<Product[]> {
    return of([
      {id: 1, name: 'Goal Zero 23000 Yeti 400 Solar Generator', price: 300.00},
      {id: 2, name: 'Little Giant 22-Foot Velocity Multi-Use Ladder', price: 196.99},
      {id: 3, name: 'Vanguard 10x42 Sprit ED Binocular (Black)', price: 149.99},
      {
        id: 4,
        name: 'Etekcity 2 Pack Portable Outdoor LED Camping Lantern Flashlight with 6 AA Batteries (Black, Collapsible)',
        price: 13.45
      },
      {id: 5, name: 'Nest Cam security camera', price: 149.00},
    ]);
  }
}
