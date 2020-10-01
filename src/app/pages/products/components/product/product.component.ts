import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../../../modules/core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() addCart: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(): void{
    this.addCart.emit(this.product.id);
  }

}
