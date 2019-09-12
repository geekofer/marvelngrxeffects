import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap, exhaustMap, catchError } from 'rxjs/operators';

import * as heroesActions from '../actions';

import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { of } from 'rxjs';

@Injectable()
export class HeroesEffects {
  constructor(private actions$: Actions, public service: HeroesService) {}

  @Effect()
  loadHeroes$ = this.actions$.pipe(
    ofType(heroesActions.LOAD_HEROES),
    exhaustMap(
      () => this.service.getAllHeroes().pipe(
        map(heroes => new heroesActions.LoadHeroesSuccess(heroes)),
        catchError(error => of(new heroesActions.LoadHeroesFail(error)))
      )
    )
  );
}
