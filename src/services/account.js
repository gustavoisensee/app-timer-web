import 'whatwg-fetch';
import { post } from './base';

export const resetPassword = ({ password, token }) => {
  const path = 'account/reset-password';
  const params = { password, token };

  return post(path, params);
};