import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Especie } from '../../interfaces/especie';
import { Raca } from '../../interfaces/racas';
import { AnimalServiceService } from '../../animal-service.service';
import { AnimalAdminService } from '../services/animal-admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministradorService } from '../services/administrador.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-editar-animal',
  templateUrl: './editar-animal.component.html',
  styleUrls: ['../../../../styles-admin.css'],
})
export class EditarAnimalComponent {
  public editor = ClassicEditor;
  public conteudo: string = '';

  public id?: number;

  public animal = {
    nome: '',
    idade: 0,
    peso: 0,
    sobre: '',
    local: '',
    porte: '',
    sexo: '',
    especieId: 0,
    racaId: 0,
  };

  public especies: Especie[] = [];
  public racas: Raca[] = [];

  public novoUsuario = {
    nome: '',
    email: '',
    senha: '',
  };

  onMudanca(event: any) {
    this.animal.sobre = event.editor.getData();
  }

  editarAnimal() {
    console.log(this.animal);
    if (this.id) {
      console.log('entrei');
      this.service.editarAnimal(this.animal, this.id).subscribe(
        (result) => {},
        (error) => {
          alert('Algo deu errado.');
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

  getAnimal() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
    this.genericService.getAnimal(id).subscribe(
      (result) => {
        this.animal.nome = result.data.nome;
        this.animal.idade = result.data.idade;
        this.animal.local = result.data.local;
        this.animal.sobre = result.data.sobre;
        this.animal.sexo = result.data.sexo;
        this.animal.porte = result.data.porte;
        if (result.data.peso) {
          this.animal.peso = result.data.peso;
        }
        this.animal.especieId = result.data.especieId;
        this.listarRacas();
        this.animal.racaId = result.data.racaId;
      },
      (error) => {
        this.router.navigate(['/admin/animais']);
      }
    );
  }

  constructor(
    private genericService: AnimalServiceService,
    private service: AnimalAdminService,
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdministradorService,
    private cookies : CookieService
  ) {
    this.getAnimal();
  }

  ngOnInit() {
    this.genericService.listarEspecies().subscribe((resultado) => {
      resultado.data.forEach((x) => {
        let especie = {
          id: x.id,
          nome: x.nome,
        };
        this.especies.push(especie);
      });
    });

    this.adminService.logado().subscribe(
      (result) => {},
      (error) => {
        if (error.status !== 200) {
          this.cookies.deleteAll();
          this.router.navigate(['/admin/login']);
        }
      }
    );
  }
}
