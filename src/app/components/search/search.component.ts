import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
	cars:any[]=[];
	term:string;
  constructor(private activatedRoute: ActivatedRoute, private _carsService: CarsService) { }

  ngOnInit() {
	  this.activatedRoute.params.subscribe(params =>{
		  //console.log(params['text']);
		  this.term = params['text'];
		  this.cars = this._carsService.searchCars( params['text']);
		  console.log(this.cars);
	  });
  }

}
