import { connect } from 'react-redux';
import HomePage from '../pages/HomePage';
import { isGetData } from '../actions';

export default connect(
  state => {
    let home = state.home || {};
    return {
      user: home || null
    }
  },
  dispatch => {
    return {
      onGetData: () => {
        dispatch(isGetData())
      },
    }
  }
)(HomePage);   