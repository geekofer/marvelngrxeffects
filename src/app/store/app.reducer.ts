import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  heroes: reducers.HeroesState;
  heroe: reducers.HeroeState;
}

export const appReducers: ActionReducerMap<AppState> = {
  heroes: reducers.heroesReducer,
  heroe: reducers.heroeReducer
};
