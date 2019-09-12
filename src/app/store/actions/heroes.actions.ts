import { Action } from '@ngrx/store';
import { Heroe } from 'src/app/models/heroe.model';

export const LOAD_HEROES = '[HEROES] Load Heroes';
export const LOAD_HEROES_SUCCESS = '[HEROES] Load Heroes SUCCESS';
export const LOAD_HEROES_FAIL = '[HEROES] Load Heroes FAIL';

export class LoadHeroes implements Action {
  readonly type = LOAD_HEROES;
}

export class LoadHeroesSuccess implements Action {
  readonly type = LOAD_HEROES_SUCCESS;
  constructor(public heroes: Heroe[]) {}
}

export class LoadHeroesFail implements Action {
  readonly type = LOAD_HEROES_FAIL;
  constructor(public payload: any) {}
}

export type heroesActions = LoadHeroes | LoadHeroesSuccess | LoadHeroesFail;
