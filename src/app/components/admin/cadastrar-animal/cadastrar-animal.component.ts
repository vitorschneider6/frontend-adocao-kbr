import { Component } from '@angular/core';
import { AnimalAdminService } from '../services/animal-admin.service';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AnimalServiceService } from '../../animal-service.service';
import { Especie } from '../../interfaces/especie';
import { Raca } from '../../interfaces/racas';
import { AnimalCriacao } from '../../interfaces/animal-criacao';
import { CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import { AdministradorService } from '../services/administrador.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cadastrar-animal',
  templateUrl: './cadastrar-animal.component.html',
  styleUrls: ['../../../../styles-admin.css'],
})
export class CadastrarAnimalComponent {
  public editor = ClassicEditor;
  public conteudo: string = '';

  public animal = {
    nome: '',
    idade: null,
    peso: null,
    sobre: '',
    local: '',
    porte: null,
    sexo: '',
    especieId: null,
    racaId: null,
  };

  public especies: Especie[] = [];
  public racas: Raca[] = [];
  public listaFotos: string[] = [];

  public novoUsuario = {
    nome: '',
    email: '',
    senha: '',
  };

  adicionarFoto(event: any) {
    let arquivo = event.target.files[0];
    if (arquivo) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.listaFotos.push(e.target.result);
      };
      reader.readAsDataURL(arquivo);
    }
  }
  onMudanca(event: any) {
    this.animal.sobre = event.editor.getData();
  }

  cadastrarAnimal() {
    if (this.listaFotos.length === 0) {
      alert('Você deve selecionar ao menos uma foto!');
    } else {
      this.service.addAnimal(this.animal).subscribe(
        (result) => {
          let id = result.data.id;
          this.service.addFoto(id, this.listaFotos).subscribe(
            (result) => {
              alert('Animal cadastrado com sucesso!');
              this.router.navigate(['/admin/animais']);
              window.location.reload();
            },
            (error) => {
              alert('Algo deu errado!');
            }
          );
        },
        (error) => {
          alert('Algo deu errado!\nRevise os campos do formulário.');
        }
      );
    }
  }

  listarRacas() {
    this.racas = [];
    if (this.animal.especieId !== null) {
      this.genericService
        .listarRacas(this.animal.especieId)
        .subscribe((resultado) => {
          resultado.data.forEach((x) => {
            let raca = {
              id: x.id,
              nome: x.nome,
            };
            this.racas.push(raca);
          });
        });
    }
  }

  constructor(
    private genericService: AnimalServiceService,
    private service: AnimalAdminService,
    private router: Router,
    private adminService : AdministradorService,
    private cookies : CookieService
  ) {}

  ngOnInit() {
    this.adminService.logado().subscribe(
      (result) => {},
      (error) => {
        if (error.status !== 200) {
          this.cookies.deleteAll();
          this.router.navigate(['/admin/login']);
        }
      }
    );

    this.genericService.listarEspecies().subscribe((resultado) => {
      resultado.data.forEach((x) => {
        let especie = {
          id: x.id,
          nome: x.nome,
        };
        this.especies.push(especie);
      });
    });
  }
}
