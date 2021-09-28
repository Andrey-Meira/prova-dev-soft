import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/Filme';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: './cadastrar-filme.component.html',
  styleUrls: ['./cadastrar-filme.component.css']
})
export class CadastrarFilmeComponent implements OnInit {

  nome!: string;
  sinopse!: string;
  duracao!: Number;
  categoria!: string;

  constructor(
    private router: Router,
    private service: FilmesService
  ) { }

  ngOnInit(): void {
  }

  cadastrar(): void {

    let filme: Filme = {
      nome: this.nome,
      sinopse: this.sinopse,
      duracao: this.duracao,
      Categoria: this.categoria,
    };
    this.service.create(filme).subscribe((filme) => {
      console.log(filme);
      this.router.navigate(["filmes/listar"]);
    });

  }

}
