import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  // Usamos s/apikey para exemplo; você deve substituir por sua chave OMDB se necessário.
  private apiUrl = 'https://www.omdbapi.com/?apikey=564727fa&t=';

  constructor(private http: HttpClient) {}

  buscarFilme(titulo: string): Observable<any> {
    // encodeURIComponent para evitar espaços/acentos quebrando a URL
    return this.http.get(this.apiUrl + encodeURIComponent(titulo));
  }
}
