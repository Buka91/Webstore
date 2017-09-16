import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model'; 

@Injectable()
export class ServerService {
	constructor(private http: Http) {
	}

	putProducts(products: Product[]) {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http.put('https://webstore-c95ff.firebaseio.com/data.json', products, { headers: headers });
	}

	transformJsonToProductArray(data) {
		let productArr: Product[] = [];
		for (let prod of data) {
			productArr.push(new Product(prod.id, prod.name, prod.category, prod.imagePath, prod.price, prod.display, prod.deleted));
		}
		return productArr;
	}

	getProducts() {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		headers.append('Cache-control', 'no-cache');
		headers.append('Cache-control', 'no-store');
		headers.append('Expires', '0');
		headers.append('Pragma', 'no-cache');
		return this.http.get('https://webstore-c95ff.firebaseio.com/data.json', { headers: headers }).map(
			(response: Response) => {
				const dataArr = response.json();
				let productsArr = this.transformJsonToProductArray(dataArr);
				return productsArr;
			}
		)
		.catch(
			(error: Response) => {
				console.log("An error occurred when getting data!");
				return Observable.throw(error);
			}
		);
	}
}