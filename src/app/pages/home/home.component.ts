import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Carrito, Products } from 'src/app/models/Products';
import { ToastService } from 'src/app/Components/Toast/toast-services';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lstPrimerosProductos: Products[] = [
    {id:1, marca: 'Lego', nombre: 'Autobus de londres',  precio: 2900,  imagen: 'assets/images/bus.png' },
    {id:2, marca: 'Funko Pop', nombre: 'Albus Dumbledore',  precio: 1200,  imagen: 'assets/images/dombuldor.png' },
    {id:3, marca: 'Playmobil', nombre: 'De Lorean ', decripcion: 'Volver al Futuro', precio: 2900,  imagen: 'assets/images/volver.png'}
  ];

  lstProductosVendidos: Products[] = [
    { id:4,marca: 'Mattel', nombre: 'Figura Call of Duty',  precio: 80,  imagen: 'assets/images/call.png' },
    { id:5,marca: 'Mattel', nombre: 'Figura Call of Duty',  precio: 80,  imagen: 'assets/images/call.png' },
     {id:6, marca: 'Mattel', nombre: 'Figura Call of Duty',  precio: 80, imagen: 'assets/images/call.png' },
  ];
  oferta: Products = { id: 7, marca: 'Cars', nombre: 'Circuito thunder', precio: 790, descuento: 1500, imagen: 'assets/images/cars.png' };


  lstProductoscardsp2s1: Products[] = [
    { id:8,marca: 'Bandai Saint Seiya', nombre: 'Myth Cloth Pegaso Seiya',  precio: 2700,  imagen: 'assets/images/card1.png' },
    { id:9,marca: 'Bandai Saint Seiya', nombre: 'Myth Cloth Dragón Shiryu',  precio: 3700,  imagen: 'assets/images/card2.png' },
     {id:10, marca: 'Bandai Saint Seiya', nombre: 'Myth Cloth Afrodita Piscis Sapuri',  precio: 1700, imagen: 'assets/images/card3.png' },
  ];

   lstProductoscardsp2s2: Products[] = [
    { id:11,marca: 'Bandai Saint Seiya', nombre: 'Myth Cloth Pegaso Seiya',  precio: 2700,  imagen: 'assets/images/card4.png' },
    { id:12,marca: 'Bandai Saint Seiya', nombre: 'Myth Cloth Dragón Shiryu',  precio: 3700,  imagen: 'assets/images/card5.png' },
     {id:13, marca: 'Bandai Saint Seiya', nombre: 'Myth Cloth Afrodita Piscis Sapuri',  precio: 1700, imagen: 'assets/images/card6.png' },
  ];

   lstProductoscardsp2s3: Products[] = [
    { id:14,marca: 'Bandai Saint Seiya', nombre: 'Myth Cloth Pegaso Seiya',  precio: 2700,  imagen: 'assets/images/card7.png' },
    { id:15,marca: 'Bandai Saint Seiya', nombre: 'Myth Cloth Dragón Shiryu',  precio: 3700,  imagen: 'assets/images/card8.png' },
     {id:16, marca: 'Bandai Saint Seiya', nombre: 'Myth Cloth Afrodita Piscis Sapuri',  precio: 1700, imagen: 'assets/images/card2.png' },
  ];









  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/2100/600`);

 _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;


  constructor(private config: NgbRatingConfig,public toastService: ToastService) {

    this.config.max = 5;
    this.config.readonly = true;
   }

  ngOnInit() {


    this.showClock();


  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public  showDate() {
    let distance = this.end - this.now;
    this.day = Math.floor(distance / this._day);
    this.hours = Math.floor((distance % this._day) / this._hour);
    this.minutes = Math.floor((distance % this._hour) / this._minute);
    this.seconds = Math.floor((distance % this._minute) / this._second);
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public showClock() {
          this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date('04/01/' + (this.now.getFullYear()) +' 00:00');
      this.showDate();
                });
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public showSuccessToast() {
    this.toastService.show('Se agrego a tu carrito', { classname: 'bg-success text-light', delay: 10000 });
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public addShop(item: Products) {
    this.showSuccessToast();
    let dato = localStorage.getItem('carrito');
    let elemento: Carrito = { products: item,Cantidad:0 };
    let lstElementos: Carrito[] = []
    if (dato.length > 0) {

      lstElementos = JSON.parse(localStorage.getItem('carrito'));


      let exist = lstElementos.find(a => a.products.id === elemento.products.id);
      if (exist) {
      lstElementos.map(a => { if (a.products.id == elemento.products.id) { a.Cantidad++; return; } });
      } else {
        elemento.Cantidad++;
        lstElementos.push(elemento)
      }


      localStorage.setItem('carrito', JSON.stringify(lstElementos));

    } else {
      elemento.Cantidad ++;
      lstElementos.push(elemento);
      localStorage.setItem('carrito', JSON.stringify(lstElementos));

    }
  }

}
