import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueroAdotarComponent } from './components/quero-adotar/quero-adotar.component';
import { IntegraComponent } from './components/integra/integra.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/admin/login/login.component';
import { RecuperarSenhaComponent } from './components/admin/recuperar-senha/recuperar-senha.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { EditarUsuarioComponent } from './components/admin/editar-usuario/editar-usuario.component';
import { CadastrarUsuarioComponent } from './components/admin/cadastrar-usuario/cadastrar-usuario.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TrocarSenhaComponent } from './components/admin/trocar-senha/trocar-senha.component';
import { ListarAnimaisComponent } from './components/admin/listar-animais/listar-animais.component';
import { CadastrarAnimalComponent } from './components/admin/cadastrar-animal/cadastrar-animal.component';
import { EditarAnimalComponent } from './components/admin/editar-animal/editar-animal.component';
import { ListarSolicitacoesComponent } from './components/admin/listar-solicitacoes/listar-solicitacoes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'filtrarAnimais',
    component: QueroAdotarComponent
  },
  {
    path: 'filtrarAnimais/:page',
    component: QueroAdotarComponent
  },
  {
    path: 'animal/:id',
    component: IntegraComponent
  },
  {
    path: 'admin/login',
    component: LoginComponent
  },
  {
    path: 'admin/recuperar-senha',
    component: RecuperarSenhaComponent
  },
  {
    path: 'admin/home',
    component: HomeAdminComponent
  },
  {
    path: 'admin/home/:filter',
    component: HomeAdminComponent
  },
  {
    path: 'admin/editar-usuario/:id',
    component: EditarUsuarioComponent
  },
  {
    path: 'admin/cadastrar-usuario',
    component: CadastrarUsuarioComponent
  },
  {
    path: 'admin/cadastrar-animal',
    component: CadastrarAnimalComponent
  },
  {
    path: 'admin/editar-animal/:id',
    component: EditarAnimalComponent
  },
  {
    path: 'solicitar-adocao/:id',
    component: FormularioComponent
  },
  {
    path: 'trocar-senha/:id',
    component: TrocarSenhaComponent
  },
  {
    path: 'admin/animais',
    component: ListarAnimaisComponent
  },
  {
    path: 'admin/solicitacoes',
    component: ListarSolicitacoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
