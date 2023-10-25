import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { OS } from 'src/app/models/os';
import { Tecnico } from 'src/app/models/tecnico';
import { ClienteService } from 'src/app/services/cliente.service';
import { OsService } from 'src/app/services/os.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit{

  os: OS = {

    tecnico: '',
    cliente: '',
    observacao: '',
    status: '',
    prioridade: ''
  }

  tecnicos: Tecnico[] = []
  clientes: Cliente[] = []

  constructor(private tecnicoService: TecnicoService,
    private clientesServices: ClienteService,
    private router: Router,
    private serviceOS: OsService){}

  ngOnInit(): void {
    this.listarTecnicos();
    this.listarClientes();
  }

  cancel():void {
    this.router.navigate(['os'])
  }

  create(): void {
    this.serviceOS.create(this.os).subscribe((resposta) =>{
      this.router.navigate(['os'])
      this.serviceOS.message('OS criada com Sucesso!')
    }, err =>{
      if(err.error.erro.match('Erro na validação dos campos!')){
        this.serviceOS.message('Erro nos Dados - VERIFIQUE OS CAMPOS!')
      }
    })
  }

  listarTecnicos(): void{
    this.tecnicoService.findAll().subscribe(resposta => {
      this.tecnicos = resposta;
    })
  }

  listarClientes(): void{
    this.clientesServices.findAll().subscribe(resposta => {
      this.clientes = resposta;
    })
  }
}
