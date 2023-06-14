import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = "https://api.themoviedb.org/3"

  private params =

    new HttpParams()
      .set('Authorization', 'Bearer 6c9a7d59f75b2c5073c5405fe3f7923c')
      .set('page', '1')
      .set('language', 'es,MX');

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'aplication/json',
    }),
    params: this.params
  };
  constructor(private http: HttpClient) {}
  // constructor(
  //   private http: HttpClient
  // ) {

  //   console.log('Probando servicio');
  // }
  // getProduct(){
  //   let header = new HttpHeaders()
  //   .set('Authorization','Bearer 6c9a7d59f75b2c5073c5405fe3f7923c')
  //   .set('page', '1')
  //   .set('language', 'es,MX');

  //   return this.http.get(this.api, {headers:header})
  // }
}
