import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((error: unknown) => {
    // we're here e.g. when an APP_INITIALIZER promise rejects
    window.document.body.classList.add('failed-init');
    console.error('when bootstrapping module', error);
  });
