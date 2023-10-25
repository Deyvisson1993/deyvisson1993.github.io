import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent {

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
    private service: TecnicoService){}

  cancel():void {
    this.router.navigate(['tecnicos'])
  }

  create(): void {
    this.service.create(this.tecnico).subscribe((resposta) =>{
      this.router.navigate(['tecnicos'])
      this.service.message('Técnico criado com Sucesso!')
    }, err =>{
      if(err.error.erro.match('Erro na validação dos campos!')){
        this.service.message('CPF Invalido ou Já cadasrtrado na base de Dados')
      }
    })
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
