import { TEST_DATA, TEST_DATA_SUCCESSFULLY, TEST_DATA_FAILED } from '../actions';

export const homeReducer = (state = {}, action) => {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case TEST_DATA:
      return {
        ...state,
      };
    case TEST_DATA_SUCCESSFULLY:
      return {
        ...state,
        data: payload,
      };
    case TEST_DATA_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
