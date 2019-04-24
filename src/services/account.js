import 'whatwg-fetch';
import { post } from './base';

export const resetPassword = ({ password, token }) => {
  const path = 'account/reset-password';
  const params = { password, token };

  return post(path, params);
};

export const login = ({ email, password }) => {
  const path = 'account/login';
  const params = {
    email,
    password
  };

  return post(path, params);
};