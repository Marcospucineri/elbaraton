import { CartEntry } from './cartentry.model';

export class Cart {
    public entries?: CartEntry[]

    constructor(entries: CartEntry[]){
      this.entries = entries;
    }
}
