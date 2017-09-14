import { Component, OnInit } from '@angular/core';
import { CarsService, Car } from './services/cars.service';

export class CarExampleInterface implements Car{
    marke: string;
    beschreibung: string;
    img: string;
    modelJahr: string;
    logo: string;
    cars: Car[];

  constructor(marke: string, beschreibung: string, img: string, modelJahr: string, logo: string, private cs: CarsService ){
      this.marke = marke;
      this.beschreibung = beschreibung;
      this.img = img;
      this.modelJahr = modelJahr;
      this.logo = logo;
     
  }
  ngOnInit(){
       this.cars = this.cs.getCars();
       console.log("dast ist mein unterface" + this.cars);
  }

}