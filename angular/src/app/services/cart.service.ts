import { Injectable, EventEmitter, Output } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Output() myOutputValue: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  topShow(x) {
    this.myOutputValue.emit(x);
  }

  setsession(x: any, y: any) {
    sessionStorage.setItem(x, JSON.stringify(y));
  }

  getsession(x: any) {
    let returnUrl = sessionStorage.getItem(x)
    if (returnUrl) {
      return JSON.parse(returnUrl);
    }
    else {
      return null;
    }

  }

  removesession(x: any) {
    sessionStorage.removeItem(x);
  }

  clearsession() {
    sessionStorage.clear();
  }

}
