import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  URL = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }

  sendPost(user): any {
    return this.http.post<any>(this.URL + 'find_user', user);

  }

  getlogin(cedula): any {
    return this.http.post<any>(this.URL + 'get_user', cedula);

  }

  createUser(user): any {
    return this.http.post<any>(this.URL + 'create_user', user);
  }

    apply_for_loan(user): any {
      console.log('loan: ', user);
    return this.http.post<any>(this.URL + 'loan', user);
  }

  get_loans(user): any {
    return this.http.post<any>(this.URL + 'get_loans', user);
  }

  pay_loan(id): any {
    console.log('enviando pago', id);
    return this.http.post<any>(this.URL + 'pay_loan', id);
  }



}
