import {ProductService} from './product.service';

describe('Service: Product', () => {
  let service:ProductService;

  beforeEach(() => {
    service = new ProductService();
  });

  it('returns a list of Products', (done) => {
    service.findAll().subscribe(res => {
      expect(res).toEqual([
        {id: 1, name: 'Goal Zero 23000 Yeti 400 Solar Generator', price: 300.00},
        {id: 2, name: 'Little Giant 22-Foot Velocity Multi-Use Ladder', price: 196.99},
        {id: 3, name: 'Vanguard 10x42 Sprit ED Binocular (Black)', price: 149.99},
        {id: 4, name: 'Etekcity 2 Pack Portable Outdoor LED Camping Lantern Flashlight with 6 AA Batteries (Black, Collapsible)', price: 13.45},
        {id: 5, name: 'Nest Cam security camera', price: 149.00},
      ]);
      done();
    });
  });
});
