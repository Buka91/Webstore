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
  		console.log(event.keyCode);
  		console.log("this.searchResult");
  		console.log(this.searchResult);
  		if (event.keyCode === 13) {
  			console.log("searchResult");
  			console.log(this.searchResult);
  			let products = this.productService.getProducts();
  			let counter: number;
  			for (let i = 0; i < products.length; i++) {
  				counter = 0;
  				console.log(this.searchResult.search(/{products[i].name}/i));
  				console.log(this.searchResult.search(/{products[i].category}/i));
  				console.log(this.searchResult.search(/{products[i].price}/i));
  				let regexName = new RegExp(products[i].name, 'i');
  				let regexCategory = new RegExp(products[i].category, 'i');
  				let regexPrice = new RegExp(products[i].price.toString(), 'i');
  				console.log("regexName");
  				console.log(regexName);
  				console.log("regexCategory");
  				console.log(regexCategory);
  				console.log("regexPrice");
  				console.log(regexPrice);
  				if (!this.searchResult.match(regexName)) {
  					counter++;
  				} 
  				if (!this.searchResult.match(regexCategory)) {
  					counter++;
  				} 
  				if (!this.searchResult.match(regexPrice)) {
  					counter++;
  				}
  				console.log("counter = " + counter);
  				if (counter === 3) products[i].display = false;
  			}
  			console.log("productArray");
  			console.log(products);
  			this.searchResult = null;
  		}
  	}

}
