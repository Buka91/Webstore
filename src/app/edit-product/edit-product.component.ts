import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ServerService } from '../server.service';
import { Product } from '../product.model';

@Component({
	selector: 'app-edit-product',
  	templateUrl: './edit-product.component.html',
  	styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

	displayRequired: string[] = ['none', 'none', 'none', 'none'];

	name: string;
	category: string;
	price: number;
	imageUrl: string;
	id: number;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private productService: ProductService,
		private serverService: ServerService) {}

  	ngOnInit() {
  		this.activatedRoute.params.subscribe((params: any) => {
  			this.id = params.id;
  			if (this.activatedRoute.snapshot.url[0].path === 'edit') {
  				let product = this.productService.getProducts()[this.id - 1];
  				this.name = product.name;
  				this.category = product.category;
  				this.price = product.price;
  				this.imageUrl = product.imagePath;
  			}
  		});
  	}

  	onSave() {
  		if (!this.name || this.name === '') this.displayRequired[0] = 'block';
  		if (!this.category || this.category === '') this.displayRequired[1] = 'block';
  		if (!this.price) this.displayRequired[2] = 'block';
  		if (!this.imageUrl || this.imageUrl === '') this.displayRequired[3] = 'block';
  		if (this.displayRequired.indexOf('block') > -1) return;
  		let products: Product[] = this.productService.getProducts();
  		if (this.activatedRoute.snapshot.url[0].path === 'edit') {
  			let product: Product = this.productService.getProducts()[this.id - 1];
  			product.name = this.name;
  			product.category = this.category;
  			product.imagePath = this.imageUrl;
  			product.price = this.price;
  			products[this.id - 1] = product;
  			this.productService.setProducts(products);
  		} else {
  			 let product: Product = new Product(this.id, this.name, this.category, this.imageUrl, this.price, true);
  			 products.push(product);
  		}
  		this.productService.setProducts(products);
  		this.serverService.putProducts(this.productService.getProducts()).subscribe(
      		(response) => console.log(response),
      		(error) => console.log(error)
    	);
    	setTimeout(() => {
    		this.displayRequired.map(item => 'none');
    		this.name = null;
    		this.category = null;
    		this.price = null;
    		this.imageUrl = null;
    		this.router.navigate(['/'])
    	}, 200);
  	}

  	onCancel() {
  		this.router.navigate(['/']);
  	}
}