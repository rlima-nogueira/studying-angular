import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  //classe principal do componente
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readProdutById(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProductById(): void {
    this.productService.updateProductById(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso');
      this.router.navigate(['/products']);
    })

  }

  cancelUpdate(): void {
    this.router.navigate(['/products']);
  }
}
