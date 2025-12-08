import { Routes } from '@angular/router';
import { App } from './app';
import { PacientDetail } from './components/pacient-detail/pacient-detail';
import { PacientList } from './components/pacient-list/pacient-list';

export const routes: Routes = [
    { path: '', component: PacientList },
    { path: 'pacients/:dni', component: PacientDetail },
];
