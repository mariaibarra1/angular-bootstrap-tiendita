
export class Products  {
  id: number;
  marca: string;
  nombre: string;
  decripcion?: string;
  precio: number;
  descuento?: number;
  imagen?: string;
  rating?: number;
}


export class Carrito {
  products: Products;
  Cantidad: number;
}
