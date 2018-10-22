import { CartEntry } from './cartentry.model';

export class Cart {
    public entries?: CartEntry[]
    public total?: number

    constructor(entries?: CartEntry[], total?: number){
      if(entries){
        this.entries = entries;
        this.total = total;
      } else {
        this.entries = [];
        this.total = 0;
      }
    }
}
