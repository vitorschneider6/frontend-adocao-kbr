import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { QueroAdotarComponent } from './components/quero-adotar/quero-adotar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IntegraComponent } from './components/integra/integra.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RodapeAdminComponent } from './components/admin/rodape-admin/rodape-admin.component';
import { CabecalhoAdminComponent } from './components/admin/cabecalho-admin/cabecalho-admin.component';
import { LoginComponent } from './components/admin/login/login.component';
import { RecuperarSenhaComponent } from './components/admin/recuperar-senha/recuperar-senha.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { CadastrarUsuarioComponent } from './components/admin/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarAnimalComponent } from './components/admin/cadastrar-animal/cadastrar-animal.component';
import { ListarAnimaisComponent } from './components/admin/listar-animais/listar-animais.component';
import { EditarUsuarioComponent } from './components/admin/editar-usuario/editar-usuario.component';
import { EditarAnimalComponent } from './components/admin/editar-animal/editar-animal.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { ModalUsuarioComponent } from './components/admin/modal-usuario/modal-usuario.component';
import { AnimalCardComponent } from './components/animal-card/animal-card.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TrocarSenhaComponent } from './components/admin/trocar-senha/trocar-senha.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AnimalModalComponent } from './components/admin/animal-modal/animal-modal.component';
import { ListarSolicitacoesComponent } from './components/admin/listar-solicitacoes/listar-solicitacoes.component';
import { SolicitacaoModalComponent } from './components/admin/solicitacao-modal/solicitacao-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    QueroAdotarComponent,
    IntegraComponent,
    HomeComponent,
    RodapeAdminComponent,
    CabecalhoAdminComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    HomeAdminComponent,
    CadastrarUsuarioComponent,
    CadastrarAnimalComponent,
    ListarAnimaisComponent,
    EditarUsuarioComponent,
    EditarAnimalComponent,
    SidebarComponent,
    ModalUsuarioComponent,
    AnimalCardComponent,
    FormularioComponent,
    TrocarSenhaComponent,
    AnimalModalComponent,
    ListarSolicitacoesComponent,
    SolicitacaoModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RecaptchaModule,
    CKEditorModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
