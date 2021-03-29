import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/Products';

@Component({
  selector: 'app-canasta',
  templateUrl: './canasta.component.html',
  styleUrls: ['./canasta.component.scss']
})
export class CanastaComponent implements OnInit {


  lstElementos: Carrito[] = [];
  total: number;
  constructor() {}

  ngOnInit() {


   this.lstElementos = JSON.parse(localStorage.getItem('carrito'));
   if (this.lstElementos) { } else {this.lstElementos = []; }

   this.total = this.lstElementos.reduce((acc,obj, ) => acc + (obj.products.precio * obj.Cantidad), 0);
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public dropElement(item: Carrito) {

   const indx = this.lstElementos.findIndex(x => x.products.id === item.products.id);
   if (indx !== -1) {
    this.lstElementos.splice(indx, 1);
   }


     this.total = this.lstElementos.reduce((acc,obj, ) => acc + (obj.products.precio * obj.Cantidad), 0);
   localStorage.setItem('carrito', JSON.stringify(this.lstElementos));

  }

   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public cleanShop() {
    this.lstElementos = [];
     this.total =0;

    localStorage.setItem('carrito','');

  }
   // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  public dashElement(item: Carrito) {


      let exist = this.lstElementos.find(a => a.products.id === item.products.id);
      if (exist && item.Cantidad >1) {
      this.lstElementos.map(a => { if (a.products.id == item.products.id) { a.Cantidad--; return; } });
      } else {
        this.dropElement(item);
      }

this.total = this.lstElementos.reduce((acc,obj, ) => acc + (obj.products.precio * obj.Cantidad), 0);
      localStorage.setItem('carrito', JSON.stringify(this.lstElementos));

  }

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  public plusElement(item: Carrito) {

      let exist = this.lstElementos.find(a => a.products.id === item.products.id);
      if (exist ) {
      this.lstElementos.map(a => { if (a.products.id == item.products.id) { a.Cantidad++; return; } });
      } else {
        this.dropElement(item);
      }

this.total = this.lstElementos.reduce((acc,obj, ) => acc + (obj.products.precio * obj.Cantidad), 0);
      localStorage.setItem('carrito', JSON.stringify(this.lstElementos));
    }







}
