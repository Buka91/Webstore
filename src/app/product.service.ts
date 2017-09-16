import { EventEmitter } from '@angular/core';
import { Product } from './product.model';

export class ProductService {
	private products: Product[] = [
		new Product(
			1,
			'Shakespeare in Fact Book',
			'Books',
			'https://upload.wikimedia.org/wikipedia/commons/e/ea/Shakespeare%2C_In_Fact_%28book_cover%29.jpg',
			19.90,
			true,
			false
		),
		new Product(
			2,
			'Lays of Ancient Rome',
			'Books',
			'https://upload.wikimedia.org/wikipedia/commons/c/ca/Lays_of_Ancient_Rome.jpg',
			24.90,
			true,
			false
		),
		new Product(
			3,
			'Java Programming',
			'Books',
			'https://upload.wikimedia.org/wikipedia/commons/e/e5/Java_Programming_Cover.jpg',
			37.90,
			true,
			false
		),
		new Product(
			4,
			'Lenovo Laptop',
			'Electronics',
			'https://upload.wikimedia.org/wikipedia/commons/e/e4/Lenovo_G500s_laptop-2905.jpg',
			890.90,
			true,
			false
		),
		new Product(
			5,
			'Phillips TV',
			'Electronics',
			'https://lh4.ggpht.com/XB1Hi_VResN95b8JKWuesB4ykE-3s_R2hVQ3dQE1vtxpe3HHQx7W5NOM-VCWNlE9ncxmND8trPKKx8XQH7bcJsc4jb_W=s0',
			540.90,
			true,
			false
		),
		new Product(
			6,
			'Sony Autoradio',
			'Electronics',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Sony_M9900_DSC_4646WP.jpg/1024px-Sony_M9900_DSC_4646WP.jpg',
			112.90,
			true,
			false
		),
		new Product(
			7,
			'Logitech mice',
			'Electronics',
			'https://upload.wikimedia.org/wikipedia/commons/2/28/2017_Mysz_komputerowa_Logitech_MX_Master.jpg',
			25.90,
			true,
			false
		),
		new Product(
			8,
			'Men\'s Leather Jacket',
			'Clothes',
			'https://static.pexels.com/photos/332617/pexels-photo-332617.jpeg',
			99.90,
			true,
			false
		),
		new Product(
			9,
			'Men\'s Sport Jacket',
			'Clothes',
			'https://c1.staticflickr.com/1/41/75860910_f35cfe5769.jpg',
			67.90,
			true,
			false
		),
		new Product(
			10,
			'Women\' Jeans',
			'Clothes',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKXg9oiRl1R9p0Od5p20ZIe0V4HVoJR1K64tvXQU6s_LVu9_g_',
			29.90,
			true,
			false
		),
		new Product(
			11,
			'Men\'s Blue Shoes',
			'Clothes',
			'https://static.pexels.com/photos/19090/pexels-photo.jpg',
			39.90,
			true,
			false
		),
		new Product(
			12,
			'Women\'s Elegant Shoes',
			'Clothes',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVHCbSAK80HCedkcVhYyXPrrin7XoJSFlRQOmBkZ883d4N-BwaxA',
			49.90,
			true,
			false
		)
	];

	getProducts() {
		return this.products.slice();
	}

	setProducts(arrProducts: Product[]) {
		this.products = arrProducts;
	}

	selectedCategory = 'All';
}