import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  link = environment.url_API;

  products: Product[] = new Array();

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.link);
  }

  getOneProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.link}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.link, product);
  }

  editProduct(id: string, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.link}/${id}`, product);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.link}/${id}`);
  }

}
