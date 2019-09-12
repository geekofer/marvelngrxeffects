import { Action } from '@ngrx/store';
import { Heroe } from 'src/app/models/heroe.model';

export const LOAD_HEROE = '[HEROE] Load Heroe';
export const LOAD_HEROE_SUCCESS = '[HEROE] Load Heroe SUCCESS';
export const LOAD_HEROE_FAIL = '[HEROE] Load Heroe FAIL';

export class LoadHeroe implements Action {
  readonly type = LOAD_HEROE;
  constructor(public id: string) {}
}

export class LoadHeroeSuccess implements Action {
  readonly type = LOAD_HEROE_SUCCESS;
  constructor(public heroe: Heroe) {}
}

export class LoadHeroeFail implements Action {
  readonly type = LOAD_HEROE_FAIL;
  constructor(public payload: any) {}
}

export type heroeActions = LoadHeroe | LoadHeroeSuccess | LoadHeroeFail;
