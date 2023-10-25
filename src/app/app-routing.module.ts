import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [

{
  path: '',
  component: HomeComponent
},

{
  path: 'tecnicos',
  component: TecnicoRedComponent
},

{
  path: 'tecnicos/create',
  component: TecnicoCreateComponent
},

{
  path: 'tecnicos/update/:id',
  component: TecnicoUpdateComponent
},

{
  path: 'tecnicos/delete/:id',
  component: TecnicoDeleteComponent
},

{
  path: 'clientes',
  component: ClienteRedComponent
},

{
  path: 'clientes/create',
  component: ClienteCreateComponent
},

{
  path: 'clientes/update/:id',
  component: ClienteUpdateComponent
},
{
  path: 'clientes/delete/:id',
  component: ClienteDeleteComponent

},

{
  path: 'os',
  component: OsRedComponent
},

{
  path: 'os/create',
  component: OsCreateComponent
},

{
  path: 'os/update/:id',
  component: OsUpdateComponent
},

{
  path: 'os/view/:id',
  component: OsViewComponent
},

{
  path: 'os/closed',
  component: OsClosedComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
