import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({
  declarations: [ListComponent, HeroeComponent],
  imports: [CommonModule],
  exports: [ListComponent, HeroeComponent]
})
export class HeroesModule {}
