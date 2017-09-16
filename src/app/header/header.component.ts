import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	isCollapses: boolean = true;
	id: number;
	searchResult: string;
	
  	constructor(private productService: ProductService) { }

  	ngOnInit() {
  		this.id = this.productService.getProducts().length + 1;
  	}

  	onSearch(event: KeyboardEvent) {
  		if (event.keyCode === 13) {
        this.productService.selectedCategory = 'All';
  			let products = this.productService.getProducts();
  			let counter: number;
  			for (let prod of products) {
  				counter = 0;
  				let regexName = new RegExp(prod.name, 'i');
  				let regexCategory = new RegExp(prod.category, 'i');
  				let regexPrice = new RegExp(prod.price.toString(), 'i');
  				if (!this.searchResult.match(regexName)) {
  					counter++;
  				} 
  				if (!this.searchResult.match(regexCategory)) {
  					counter++;
  				} 
  				if (!this.searchResult.match(regexPrice)) {
  					counter++;
  				}
  				if (counter === 3) {
            prod.display = false;
          } else {
            prod.display = true;
          }
  			}
  			this.searchResult = null;
  		}
  	}

}