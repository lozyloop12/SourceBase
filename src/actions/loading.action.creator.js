import { SHOW_LOADING, HIDE_LOADING } from './loading.action';

export const showLoading = () => {
  return {
    type: SHOW_LOADING
  };
}

export const hideLoading = () => {
  return {
    type: HIDE_LOADING
  };
}