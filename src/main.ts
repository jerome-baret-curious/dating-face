import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((error: unknown) => {
  // we're here e.g. when an APP_INITIALIZER promise rejects
  window.document.body.classList.add('failed-init');
  console.error('when bootstrapping module', error);
});
