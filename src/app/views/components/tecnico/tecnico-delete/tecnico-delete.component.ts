import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit{

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

  delete():void{
    this.service.delete(this.id_tec).subscribe(resposta =>{
      this.router.navigate(['tecnicos'])
      this.service.message('Técnico deletado com sucesso')
    })
  }

  cancel():void {
    this.router.navigate(['tecnicos'])
  }

}
