import { SHOW_LOADING, HIDE_LOADING } from '../../actions';

export const loadingReducer = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_LOADING:
      return {
        ...state,
        fetching: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
};
