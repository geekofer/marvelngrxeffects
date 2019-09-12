import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListComponent } from './heroes/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
