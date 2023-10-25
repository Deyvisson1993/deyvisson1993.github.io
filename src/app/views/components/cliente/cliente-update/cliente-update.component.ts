import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent {

  id_cli = ''

  cliente: Cliente = {
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
    private service: ClienteService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id_cli = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void{
    this.service.findById(this.id_cli).subscribe(resposta =>{
      this.cliente = resposta;
    })
  }

  cancel():void {
    this.router.navigate(['clientes'])
  }

  update(): void {
    this.service.update(this.cliente).subscribe((resposta) =>{
      this.router.navigate(['clientes'])
      this.service.message('Cliente criado com Sucesso!')
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
