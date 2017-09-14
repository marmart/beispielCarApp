import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
  private cars: Car[]= [
    {
      make: 'BMW',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      img: 'assets/img/bmw.jpg',
      modelYear: '2015-11-01',
      logo: 'BMW'
    },
    {
      make: 'Mercedez Benz',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      img: 'assets/img/mercedes.png',
      modelYear: '1939-05-01',
      logo: 'mercedez'
    },
    {
      marke: 'Mazda',
      beschreibung: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      img: 'assets/img/mazda.png',
      modelJahr: '1964-01-01',
      logo: 'mazda'
    },
    {
      marke: 'Ferrari',
      beschreibung: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      img: 'assets/img/ferrari.png',
      modelJahr: '1975-05-01',
      logo: 'ferrari'
    },
    {
      marke: 'Volkswagen',
      beschreibung: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      img: 'assets/img/vw.png',
      modelJahr: '1940-06-01',
      logo: 'VW'
    },
    {
      marke: 'Opel',
      beschreibung: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      img: 'assets/img/opel.png',
      modelJahr: '1962-08-01',
      logo: 'opel'
    },
    {
      marke: 'Skoda',
      beschreibung: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      img: 'assets/img/skoda.png',
      modelJahr: '2015-11-01',
      logo: 'skoda'
    }
  ];

  constructor() {
      console.log('Service ist bereit!!!');
  }

  getCars(): Car[] {
    return this.cars;
  }

  getCar(ind: string) {
    return this.cars[ind];
  }

  searchCars(term: string) {
    const carsArr: Car[] = [];
    term = term.toLowerCase();
      for (const car of this.cars){
        const marke = car.marke.toLowerCase();
        if (marke.indexOf(term) >= 0 ) {
          carsArr.push(car);
        }
      }
      return carsArr;
  }
}


export interface Car {
  make: string;
  description: string;
  img: string;
  modelYear: string;
  logo: string;
}

