import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
	selector: 'app-sidebar',
  	templateUrl: './sidebar.component.html',
  	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	cat: string = '';

	constructor(private productService: ProductService) { }

  	ngOnInit() {
  		this.cat = this.productService.selectedCategory;
  	}

  	chooseCategory(category: string) {
      this.productService.selectedCategory = category;
  		this.cat = this.productService.selectedCategory;
      let products = this.productService.getProducts();
      for (let product of products) {
        product.display = true;
      }
  	}
}
