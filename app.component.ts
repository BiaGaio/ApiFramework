import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = '';
  filme: any = null;
  erro = '';

  constructor(private moviesService: MoviesService) {}

  buscar() {
    this.erro = '';
    this.filme = null;

    if (!this.titulo.trim()) {
      this.erro = 'Digite um título para buscar.';
      return;
    }

    this.moviesService.buscarFilme(this.titulo).subscribe({
      next: (data) => {
        if (data.Response === 'False') {
          this.erro = 'Filme não encontrado!';
        } else {
          this.filme = data;
        }
      },
      error: () => this.erro = 'Erro ao consultar a API.'
    });
  }
}
