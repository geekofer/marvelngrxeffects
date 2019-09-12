import { Heroe } from 'src/app/models/heroe.model';
import * as fromHeroe from '../actions';

export interface HeroeState {
  heroe: Heroe;
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initState: HeroeState = {
  heroe: null,
  loading: false,
  loaded: false,
  error: null
};

export function heroeReducer(state = initState, action: fromHeroe.heroeActions): HeroeState {
  switch (action.type) {
    case fromHeroe.LOAD_HEROE:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromHeroe.LOAD_HEROE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        heroe: { ...action.heroe }
      };
    case fromHeroe.LOAD_HEROE_FAIL:
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
