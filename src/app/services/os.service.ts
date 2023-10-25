import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { OS } from '../models/os';

@Injectable({
  providedIn: 'root'
})
export class OsService {

  baseUrl: String = environment.baseUrl;

  constructor(
    private http : HttpClient,
    private snack: MatSnackBar) { }

// Listar os OSs
findAll():Observable<OS[]>{
    const url = this.baseUrl + "/os";

return this.http.get<OS[]>(url);
 }

 // Buscar OS pelo ID
 findById(id : any):Observable<OS>{
  const url = `${this.baseUrl}/os/${id}`;
  return this.http.get<OS>(url);
 }

// Criar os OSs
 create(os: OS):Observable<OS>{
    const url = this.baseUrl + "/os";
    return this.http.post<OS>(url, os);
 }

 // Atualizando OS
 update(os: OS):Observable<OS>{
  const url = this.baseUrl + "/os";
  return this.http.put<OS>(url, os);
 }

 delete(id : any):Observable<void>{
  const url = `${this.baseUrl}/os/${id}`;
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
