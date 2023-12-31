import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnico } from '../models/tecnico';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) { }

// Listar os Tecnicos
findAll():Observable<Tecnico[]>{
    const url = this.baseUrl + "/tecnicos";

return this.http.get<Tecnico[]>(url);
 }

 // Buscar Tecnico pelo ID
 findById(id : any):Observable<Tecnico>{
  const url = `${this.baseUrl}/tecnicos/${id}`;
  return this.http.get<Tecnico>(url);
 }

// Criar os Tecnicos
 create(tecnico: Tecnico):Observable<Tecnico>{
    const url = this.baseUrl + "/tecnicos";
    return this.http.post<Tecnico>(url, tecnico);
 }

 // Atualizando Tecnico
 update(tecnico: Tecnico):Observable<Tecnico>{
  const url = this.baseUrl + "/tecnicos/" + tecnico.id;
  return this.http.put<Tecnico>(url, tecnico);
 }

 delete(id : any):Observable<void>{
  const url = `${this.baseUrl}/tecnicos/${id}`;
  return this.http.delete<void>(url);
 }

 //Mensagem

message(msg:  String): void {
  this.snack.open(`${msg}`, 'OK', {
    horizontalPosition: 'end',
    verticalPosition: 'top',
    duration: 4000
  })
}
}
