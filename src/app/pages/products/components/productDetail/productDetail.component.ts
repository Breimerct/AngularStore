import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../../modules/core/services/products.service';
import { Product } from '../../../../modules/core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.getProduct(params.id);
    });
  }

  getProduct(id: string): void {
    this.productService.getOneProduct(id).subscribe((p) => (this.product = p));
  }
}
