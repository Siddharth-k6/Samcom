export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  added:any;
  qty:number;
  constructor(id, title, description = '', price = 0, image = '',added,qty) {
    this.id = id
    this.title = title
    this.description = description
    this.price = price
    this.image = image
    this.added = added
    this.qty - qty
  }
}
