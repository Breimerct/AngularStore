import { ProductsService } from '../../../../modules/core/services/products.service';
import { Product } from './../../../../modules/core/models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = new Array();

  constructor(
    private productsServices: ProductsService
  ) { }

  ngOnInit(): void {
   this.productsServices.getAllProducts()
   .subscribe(p => this.products = p);
  }

  getIdProduct(id: number): void{
    console.log('product id', id);
  }

}
