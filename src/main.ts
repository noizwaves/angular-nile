import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { NileAppComponent, environment } from './app/index';

if (environment.production) {
  enableProdMode();
}

bootstrap(NileAppComponent);

