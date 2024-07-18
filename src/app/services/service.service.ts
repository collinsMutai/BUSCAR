
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
// export const endpoint='http://api.ma3app.com/appApi';
// export const endpoint='http://bossapi.99synergy.com/appApi';
export const endpoint='https://api.iabiri.com/appApiV1';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) {
  }
  private extractData(res: any) {
    const  body = res;
    return body || { };
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  getCities(): Observable<any> {
    return this.http.post(endpoint+'/common/getCity',{"city_id":0,"city_type":"source","token":"FA992334-76E3-44AD-BB4E-062FD0266D71"}).pipe(
      map(this.extractData));
  }
  getDestinations(id): Observable<any> {
    return this.http.post(endpoint+'/common/getCity',{"city_id":id,"city_type":"destination","token":"FA992334-76E3-44AD-BB4E-062FD0266D71"}).pipe(
      map(this.extractData));
  }

    getTrips(data): Observable<any> {
    return this.http.post(endpoint+'/booking/filterBuses',data).pipe(
      map(this.extractData));
  }
  getSeats(data): Observable<any> {
    return this.http.post(endpoint+'/booking/getTripSeatsPrice',data).pipe(
      map(this.extractData));
  }
  getBoardingDroping(data): Observable<any> {
    return this.http.post(endpoint+'/booking/getBoardingDroppingPoints',data).pipe(
      map(this.extractData));
  }
  bookingTicket(data): Observable<any> {
    return this.http.post(endpoint+'/booking/save',data).pipe(
      map(this.extractData));
  }
  login(data): Observable<any> {
    return this.http.post(endpoint+'/AppUser/LoginUsers',data).pipe(
      map(this.extractData));
  }
  otpVerification(data): Observable<any> {
    return this.http.post(endpoint+'/AppUser/UserOTPVerification',data).pipe(
      map(this.extractData));
  }
  sigup(data): Observable<any> {
    return this.http.post(endpoint+'/AppUser/RegisterUsers',data).pipe(
      map(this.extractData));
  }
changePassword(data): Observable<any> {
    return this.http.post(endpoint+'/AppUser/ChangePassword',data).pipe(
      map(this.extractData));
  }
  paymentMethods(data): Observable<any> {
    return this.http.post(endpoint+'/booking/paymentMethod',data).pipe(
      map(this.extractData));
  }

makePayment(data): Observable<any> {
    return this.http.post(endpoint+'/paymentGateway/init',data).pipe(
      map(this.extractData));
}


checkMpesaPayment(data): Observable<any> {
  return this.http.post(endpoint+'/paymentGateway/checkMpesaPayment',data).pipe(
    map(this.extractData));
}
 
}
