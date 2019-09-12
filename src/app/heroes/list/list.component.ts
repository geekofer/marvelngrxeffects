import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';

import * as heroesActions from '../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  public heroes: Heroe[] = [];
  public error: any;
  public loading: boolean;

  constructor(private store: Store<AppState>, private route: Router) {}

  ngOnInit() {
    this.store.dispatch(new heroesActions.LoadHeroes());

    this.store.select('heroes').subscribe(data => {
      this.heroes = data.heroes;
      this.error = data.error;
      this.loading = data.loading;
    });
  }
  showHeroe(id: string) {
    this.route.navigateByUrl(`/heroe/${id}`);
  }
}
