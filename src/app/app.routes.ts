import { ExtraOptions, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './modules/work/work.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: "", title: "Dipesh Vaghela", component: HomeComponent },
    { path: "work", title: "Work", component: WorkComponent },
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: '**', title: "Not Found", component: PageNotFoundComponent },
];