import { Heroe } from 'src/app/models/heroe.model';
import * as fromHeroes from '../actions';

export interface HeroesState {
  heroes: Heroe[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initState: HeroesState = {
  heroes: [],
  loading: false,
  loaded: false,
  error: null
};

export function heroesReducer(state = initState, action: fromHeroes.heroesActions): HeroesState {
  switch (action.type) {

    case fromHeroes.LOAD_HEROES:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromHeroes.LOAD_HEROES_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        heroes: [ ...action.heroes]
      };
    case fromHeroes.LOAD_HEROES_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          url: action.payload.url,
          message: action.payload.message
        }
      };

    default:
      return state;
  }
}
