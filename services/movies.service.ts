import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://www.omdbapi.com/?apikey=564727fa&t=';

  constructor(private http: HttpClient) {}

  buscarFilme(titulo: string): Observable<any> {
    return this.http.get(this.apiUrl + titulo);
  }
}
