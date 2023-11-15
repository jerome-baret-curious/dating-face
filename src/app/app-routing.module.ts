import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ProfileViewerComponent } from './profile-view/profile-viewer.component';

const routes: Routes = [
  { path: 'view', component: ProfileViewerComponent },
  { path: 'edit', component: ProfileEditorComponent },
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
