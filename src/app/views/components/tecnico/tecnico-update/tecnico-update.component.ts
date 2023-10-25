import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent implements OnInit{

  id_tec = ''

  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl(``, [Validators.minLength(3)])
  cpf = new FormControl(``, [Validators.minLength(11)])
  telefone = new FormControl(``, [Validators.minLength(11)])

  constructor(
    private router : Router,
    private service: TecnicoService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void{
    this.service.findById(this.id_tec).subscribe(resposta =>{
      this.tecnico = resposta;
    })
  }

  update():void {
    this.service.update(this.tecnico).subscribe(resposta =>{
      this.router.navigate(['tecnicos'])
      this.service.message('Técnico Atualizado com Sucesso!')
    }, err =>{
      if(err.error.erro.match('Erro na validação dos campos!')){
        this.service.message('CPF Invalido ou Já cadasrtrado na base de Dados')
      }
    })
  }

  cancel():void {
    this.router.navigate(['tecnicos'])
  }

  erroValidNome(){
    if(this.nome.invalid){
      return 'O NOME deve ter entre 5 e 100 carecteres!'
    }
    return false;
  }
  erroValidCpf(){
    if(this.nome.invalid){
      return 'O CPF deve ter 11 carecteres!'
    }
    return false;
  }  erroValidTelefone(){
    if(this.nome.invalid){
      return 'O TELEFONE deve ter 11 carecteres!'

    }
    return false;
  }


}
