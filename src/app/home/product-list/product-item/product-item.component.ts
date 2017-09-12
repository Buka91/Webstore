import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../product.model';
import { ProductService } from '../../../product.service';
import { ServerService } from '../../../server.service';

@Component({
	selector: 'app-product-item',
  	templateUrl: './product-item.component.html',
  	styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

	@Input() product: Product;

  constructor(private router: Router, private productService: ProductService, private serverService: ServerService) { }

  ngOnInit() {
  }

  onDelete(product: Product) {
  	product.display = false;
    this.serverService.putProducts(this.productService.getProducts()).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onEdit(product: Product) {
    this.router.navigate(['/edit', product.id, product.name]);
  }
}
