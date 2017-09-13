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
	
  	constructor(private productService: ProductService) { }

  	ngOnInit() {
  		this.id = this.productService.getProducts().length + 1;
  	}

}
