import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NileAppComponent } from '../app/nile.component';

beforeEachProviders(() => [NileAppComponent]);

describe('App: Nile', () => {
  it('should create the app',
      inject([NileAppComponent], (app: NileAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'nile works!\'',
      inject([NileAppComponent], (app: NileAppComponent) => {
    expect(app.title).toEqual('nile works!');
  }));
});
