import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoRedComponent } from './views/components/tecnico/tecnico-red/tecnico-red.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteRedComponent } from './views/components/cliente/cliente-red/cliente-red.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { OsRedComponent } from './views/components/os/os-red/os-red.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsViewComponent } from './views/components/os/os-view/os-view.component';
import { OsClosedComponent } from './views/components/os/os-closed/os-closed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TecnicoRedComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteRedComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    OsRedComponent,
    OsCreateComponent,
    OsUpdateComponent,
    OsViewComponent,
    OsClosedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
