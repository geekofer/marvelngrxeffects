import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap, exhaustMap, catchError } from 'rxjs/operators';

import * as heroeActions from '../actions';

import { HeroesService } from 'src/app/services/heroes/heroes.service';
import { of } from 'rxjs';

@Injectable()
export class HeroeEffects {
  constructor(private actions$: Actions, public service: HeroesService) {}

  @Effect()
  loadHeroe$ = this.actions$.pipe(
    ofType(heroeActions.LOAD_HEROE),
    exhaustMap(
      ( action: heroeActions.LoadHeroe ) => this.service.getHeroeById(action.id).pipe(
        map(heroe => new heroeActions.LoadHeroeSuccess(heroe)),
        catchError(error => of(new heroeActions.LoadHeroeFail(error)))
      )
    )
  );
}
