import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Product } from './product.model'; 

@Injectable()
export class ServerService {
	constructor(private http: Http) {
	}

	storeProducts(products: Product[]) {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http.post('https://webstore-c95ff.firebaseio.com/data.json', products, { headers: headers });
	}

	putProducts(products: Product[]) {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http.put('https://webstore-c95ff.firebaseio.com/data.json', products, { headers: headers });
	}

	transformJsonToProductArray(data) {
		let productArr: Product[] = [];
		for (let i = 0; i < data.length; i++) {
			productArr.push(new Product(data[i].id, data[i].name, data[i].category, data[i].imagePath, data[i].price, data[i].display));
		}
		return productArr;
	}

	getProducts() {
		return this.http.get('https://webstore-c95ff.firebaseio.com/data.json').map(
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