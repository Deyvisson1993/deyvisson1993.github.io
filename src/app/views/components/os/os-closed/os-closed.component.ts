import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { OS } from 'src/app/models/os';
import { ClienteService } from 'src/app/services/cliente.service';
import { OsService } from 'src/app/services/os.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-os-closed',
  templateUrl: './os-closed.component.html',
  styleUrls: ['./os-closed.component.css']
})
export class OsClosedComponent implements  AfterViewInit {

  lista: OS[] = []

  displayedColumns: string[] = ['tecnico', 'cliente','abertura', 'fechamento','prioridade','status','action'];
  dataSource = new MatTableDataSource<OS>(this.lista);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service : OsService,
    private router : Router,
    private tecnicoServece: TecnicoService,
    private clienteServece: ClienteService){}

  ngAfterViewInit() {
    this.findAll();
  }

  //Retornar lista OSs
  findAll(): void{
    this.service.findAll().subscribe((resposta) =>{
      resposta.forEach(x => {
        if(x.status == "ENCERRADO"){
          this.lista.push(x)
        }
      });
      this.listarTecnico();
      this.listarCliente();
      this.dataSource = new MatTableDataSource<OS>(this.lista);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate(): void {

    this.router.navigate(['os/create'])
  }

  listarTecnico(): void{
    this.lista.forEach(x => {
      this.tecnicoServece.findById(x.tecnico).subscribe(resposta => {
        x.tecnico = resposta.nome
      })
    })
  }

  listarCliente(): void{
    this.lista.forEach(x => {
      this.clienteServece.findById(x.cliente).subscribe(resposta => {
        x.cliente = resposta.nome
      })
    })
  }

  prioridade(x : any){
    if(x == 'BAIXA'){
      return 'baixa'
    } else if(x == 'MEDIA'){
      return 'media'
    } else {
      return 'alta'
    }
  }

}

