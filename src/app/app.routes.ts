import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { UploadComponent } from './features/upload/upload.component';

export const routes: Routes = [
  {path: 'upload', component: UploadComponent},
    { path: 'home', component: HomeComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  ];
