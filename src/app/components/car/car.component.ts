import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styles: []
})
export class CarComponent {
car: any;
constructor(private activatedRoute: ActivatedRoute,
            private _carsService: CarsService) {
  this.activatedRoute.params.subscribe(params => {
    this.car = this._carsService.getCar( params['id']);
    console.log('Route Father');
    console.log(this.car);

});
  }
}













