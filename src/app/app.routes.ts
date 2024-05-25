import { Routes } from '@angular/router';
import { ProfileViewerComponent } from './profile-view/profile-viewer.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
  { path: 'view', component: ProfileViewerComponent },
  { path: 'edit', component: ProfileEditorComponent },
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
