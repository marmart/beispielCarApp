import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../../services/cars.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  edit: any;
  constructor(private activatedRoute: ActivatedRoute,
              private _carsService: CarsService) {
    this.activatedRoute.params.subscribe(params => {
      this.edit = this._carsService.getCar( params['id']);
      console.log('Route Child');
      console.log(this.edit);
  });
    }


}
