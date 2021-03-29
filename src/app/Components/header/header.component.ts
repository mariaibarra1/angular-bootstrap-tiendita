import { Component, OnInit } from '@angular/core';
import { Carrito, Products } from 'src/app/models/Products';
import { ToastService } from '../Toast/toast-services';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export  class HeaderComponent implements OnInit {

  dato: Carrito[];

   lstProductosDropdown: Products[] = [
    {id:17, marca: 'Lego', nombre: 'halcon milenario',  precio: 3800,  imagen: 'assets/images/dropdown1.png' },
     { id: 18, marca: 'Lego', nombre: 'halcon milenario', precio: 3800, imagen: 'assets/images/dropdown1.png' },
     { id: 19, marca: 'Lego', nombre: 'halcon milenario', precio: 3800, imagen: 'assets/images/dropdown1.png' },
      {id:20, marca: 'Lego', nombre: 'halcon milenario',  precio: 3800,  imagen: 'assets/images/dropdown1.png' }
  ];
  constructor( public toastService: ToastService ) {


   }

  ngOnInit() {



  }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public showSuccessToast() {
    this.toastService.show('Se agrego a tu carrito', { classname: 'bg-success text-light', delay: 10000 });
  }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  public addShop(item: Products) {
    this.showSuccessToast()
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
