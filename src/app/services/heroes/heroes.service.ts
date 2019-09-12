import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  /* go to https://developer.marvel.com and create your developer account
   * config your credentials here
   *
   * note: for generate your hash do you need go to https://www.md5hashgenerator.com/
   * and paste (ts+privateKey+publicKey)
   * */

  private MARVEL_API: any = {
    PUBLIC_KEY: 'c298128325183738738076b8296b5dad',
    HASH: '4dd80f5219ee0c1776583558e9bf4cd7'
  };

  private authApi = `?ts=1&apikey=${this.MARVEL_API.PUBLIC_KEY}&hash=${this.MARVEL_API.HASH}`;

  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<any> {
    return this.http.get(`https:gateway.marvel.com/v1/public/characters${this.authApi}`).pipe(map((data: any) => data.data.results));
  }

  getHeroeById(id: string): Observable<any> {
    return this.http
      .get(`https:gateway.marvel.com/v1/public/characters/${id}${this.authApi}`)
      .pipe(map((data: any) => data.data.results[0]));
  }
}
