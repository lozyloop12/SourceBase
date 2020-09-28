import { RequestHelper } from '../../../services';

export const getdata = () => {
  return RequestHelper.get();
};
