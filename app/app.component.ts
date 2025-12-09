import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Buscador de Filmes';
  filme: any = null;
  erro = '';

  constructor(private moviesService: MoviesService) {}

  buscar(tituloInput: string) {
    this.erro = '';
    this.filme = null;
    if (!tituloInput) { this.erro = 'Digite um título.'; return; }
    this.moviesService.buscarFilme(tituloInput).subscribe({
      next: data => {
        if (data && (data.Response === 'True' || data.title || data.Title)) {
          this.filme = data;
        } else {
          this.erro = 'Filme não encontrado.';
        }
      },
      error: err => {
        console.error(err);
        this.erro = 'Erro ao buscar a API.';
      }
    });
  }
}
