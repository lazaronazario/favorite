import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Filme } from '../models/filme';
import { FilmesService } from '../services/filme.service';

@Component({
  selector: 'app-form-films',
  templateUrl: './form-films.component.html',
  styleUrls: ['./form-films.component.css']
})
export class FormFilmsComponent implements OnInit {
  filme: Filme;
  filmeForm = this.fb.group({
    titulo: null,
    elenco: [null, Validators.required],
    ano: [null, Validators.required],
    genero: [null, Validators.required]
  });

  displayedColumns: string[] = ['Título', 'Elenco', 'Gênero', 'Ano'];
  listaFilmes: Filme[];

  generos = [
    'Drama', 'Ação', 'Comédia' ];

  constructor(private fb: FormBuilder, private service: FilmesService) {}

  salvar() {
    this.filme = this.filmeForm.value;
    this.service.adicionarFilme(this.filmeForm.value).subscribe(
      (res) => {
        alert('Thanks! : ' + JSON.stringify(res));
        this.listarFilmes();
      },
      (err) => {alert('There is a problem!' + JSON.stringify(err)); }
    );
  }

  ngOnInit(): void {
    this.listarFilmes();
  }

  listarFilmes(): void {
    this.service.getListaFilmes().subscribe(
      (res) => {this.listaFilmes = res; },
      (err) => {alert('There is a problem!' + JSON.stringify(err)); }
    );
  }
}