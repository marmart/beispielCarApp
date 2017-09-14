import { Component, OnInit } from '@angular/core';
import { CarsService, Car } from '../../services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',

})
export class CarsComponent implements Car, OnInit {
  make: string;
  description: string;
  img: string;
  modelYear: string;
  logo: string;
  cars: Car[] = [];

  constructor( private _carsService: CarsService, private router: Router) { }

  ngOnInit() {
    this.cars = this._carsService.getCars();

  }

  showCar( ind: number ) {
    this.router.navigate(['/car', ind] );
  }

}
