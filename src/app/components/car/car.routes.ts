import { Routes } from '@angular/router';

import { NeuComponent } from '../car/neu/neu.component';
import { EditComponent } from '../car/edit/edit.component';
import { CarComponent } from '../car/car.component';

export const CAR_ROUTES: Routes = [

    { path: 'new', component: NeuComponent },
    { path: 'edit', component: EditComponent },
    { path: '', pathMatch: 'full', redirectTo: 'car' }
];



