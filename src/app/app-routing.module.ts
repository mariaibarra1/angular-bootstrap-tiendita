import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanastaComponent } from './pages/canasta/canasta.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'canasta',
    component:CanastaComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
