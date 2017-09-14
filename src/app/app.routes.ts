import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import { SearchComponent } from './components/search/search.component';

import { CAR_ROUTES } from './components/car/car.routes';

const APP_ROUTES:  Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'cars', component: CarsComponent },
	{ path: 'car/:id', component: CarComponent, children: CAR_ROUTES },
	{ path: 'search/:text', component: SearchComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

