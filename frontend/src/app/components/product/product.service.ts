import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error']: ['msg-sucess']  //deixa usar o css criado em style css para o box de msg de sucesso
    });
  }

  saveProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readProdutById(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  updateProductById(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  deleteProductById(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log(e);
    this.showMessage('Ocorreu um erro! ', true)
    return EMPTY;
}

}
