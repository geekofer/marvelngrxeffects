import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';

import * as heroeActions from '../../store/actions';
import { Heroe } from 'src/app/models/heroe.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  loading: boolean;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select('heroe')
      .pipe(filter(heroe => heroe != null))
      .subscribe(data => {
        this.heroe = data.heroe;
        this.loading = data.loading;
        this.error = data.error;
      });

    this.router.params.subscribe(params => {
      const id = params.id;
      this.store.dispatch(new heroeActions.LoadHeroe(id));
    });

  }
}
