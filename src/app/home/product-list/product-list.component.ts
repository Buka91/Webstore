import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../product.service';
import { ServerService } from '../../server.service';

@Component({
	selector: 'app-product-list',
  	templateUrl: './product-list.component.html',
  	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterContentChecked {

	products: Product[] = [];

  	constructor(private productService: ProductService, private serverService: ServerService) { }

    loadProducts() {
      this.products = this.productService.getProducts().filter(
        (product) => {
          if (this.productService.selectedCategory === 'All') {
            return product.display === true && product.deleted === false;
          } else {
            return product.display === true && product.deleted === false && product.category === this.productService.selectedCategory;
          }
        }
      );
    }
    
  	ngOnInit() {
      this.serverService.getProducts().subscribe(
        (products: Product[]) => {
          this.productService.setProducts(products);
        },
        (error) => console.log(error)
      );
      this.loadProducts();
  	}

  	ngAfterContentChecked() {
      this.loadProducts();
  	}
}