import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../models/filme';

const filmesApiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/26';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }  

  getListaFilmes(): Observable<Filme[]> {
    const url = filmesApiUrl + '/mesorregioes';
    return this.http.get<Filme[]>(url);
  }

  getFilme(id: number): Observable<Filme> {
    const url = filmesApiUrl + '/filme/' + id;
    return this.http.get<Filme>(url);
  }

  adicionarFilme(filme: Filme): Observable<Filme> {
    const url = filmesApiUrl + '/filme';
    return this.http.post<Filme>(url, filme);
  }

  excluirFilme(id: number): Observable<Filme> {
    const url = filmesApiUrl + '/filme/' + id;
    return this.http.delete<Filme>(url);
  }

}