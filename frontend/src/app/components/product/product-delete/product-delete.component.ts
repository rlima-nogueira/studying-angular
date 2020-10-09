import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

    product: Product;

  constructor(
      private productService: ProductService,
      private router: Router,
  ) { }

  ngOnInit(): void {
    const id = 1;
    this.productService.readProdutById(id).subscribe(product => {
      this.product = product;
    });
  }


  deleteProductById(): void{
        this.productService.deleteProductById(this.product.id).subscribe(() => {
          this.productService.showMessage('Produto excluido com sucesso!');
          this.router.navigate(['/products']);
        })
  }

  cancelDelete(): void {
    this.router.navigate(['/products']);
  }


}
