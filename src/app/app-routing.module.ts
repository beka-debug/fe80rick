import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlterEgoComponent } from './alter-ego/alter-ego.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'detail/:name/:status',component:AlterEgoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
