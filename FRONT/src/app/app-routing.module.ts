import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFilmeComponent } from './components/cadastrar-filme/cadastrar-filme.component';
import { ListaFilmesComponent } from './components/lista-filmes/lista-filmes.component';

const routes: Routes = [

  {
    path: '',
    component: ListaFilmesComponent
  },
  {
    path: 'filmes/listar',
    component: ListaFilmesComponent
  },
  {
    path: 'filmes/cadastrar',
    component: CadastrarFilmeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }