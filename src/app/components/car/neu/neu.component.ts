import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../../services/cars.service';

@Component({
  selector: 'app-neu',
  templateUrl: './neu.component.html',
  styleUrls: ['./neu.component.css']
})
export class NeuComponent {
  edit:any;
    constructor(private activatedRoute: ActivatedRoute, 
                private _carsService: CarsService) {
      this.activatedRoute.parent.params.subscribe( params =>{
        this.edit = this._carsService.getCar( params['id']);
        console.log("Route Tochter");
        console.log(this.edit);
    })
    }

 

}