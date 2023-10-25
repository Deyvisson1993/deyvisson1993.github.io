import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-red',
  templateUrl: './cliente-red.component.html',
  styleUrls: ['./cliente-red.component.css']
})
export class ClienteRedComponent implements AfterViewInit {

  cliente: Cliente[] = []

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'action'];
  dataSource = new MatTableDataSource<Cliente>(this.cliente);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : ClienteService,
    private router : Router){}

  ngAfterViewInit() {
    this.findAll();
  }

  //Retornar os Clientes
  findAll(): void{
    this.service.findAll().subscribe((resposta) =>{
      this.cliente = resposta;
      this.dataSource = new MatTableDataSource<Cliente>(this.cliente);
      this.dataSource.paginator = this.paginator;
    })
  }


  navigateToCreate(): void {

    this.router.navigate(['clientes/create'])
  }
}

