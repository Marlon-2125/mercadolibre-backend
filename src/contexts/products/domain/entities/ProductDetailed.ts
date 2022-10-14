import {Product} from './Product';

export class ProductDetailed extends Product {
  readonly details: string;

  // tslint:disable-next-line:ter-max-len
  constructor({id, title, price, picture, condition, free_shipping, details}: { id: string; title: string; price: any; picture: string; condition: string; free_shipping: boolean; details: string}) {
    super({id, title, price, picture, condition, free_shipping});
    this.details = details;
  }
}
