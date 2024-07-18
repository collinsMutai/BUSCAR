import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  bookingdata:BehaviorSubject<any> = new BehaviorSubject({});
  token:BehaviorSubject<any> = new BehaviorSubject('');
  review_info=this.bookingdata.asObservable();
  loginModal:BehaviorSubject<Boolean> = new BehaviorSubject(false);
  login_modal=this.loginModal.asObservable();
  booking_token=this.token.asObservable();
  authenticated:BehaviorSubject<Boolean> = new BehaviorSubject(false);
  auth=this.authenticated.asObservable();
  constructor() { }
  openLoginModal(){
    this.loginModal.next(true);
  }
setBooking(data){
  this.bookingdata.next(data);
  localStorage.setItem('booking_info',JSON.stringify(data))
}
setToken(text){
  this.token.next(text);
}

}
