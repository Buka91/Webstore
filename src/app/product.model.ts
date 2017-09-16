export class Product {
	constructor(
		public id: number,
		public name: string,
		public category: string,
		public imagePath: string,
		public price: number,
		public display: boolean,
		public deleted: boolean
	) {}
}