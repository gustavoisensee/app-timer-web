import { get, post } from './base';
import { retrieveData } from './storage';
import { USER } from '../constants/storageKeys';

export const getMonths = async() => {
  const { token, user } = await retrieveData(USER);
  const path = `month/user/${user.id}`;
  
  return get({ path, auth: true, token });
};

export const saveMonths = async({ data }) => {
  const { token, user } = await retrieveData(USER);
  const path = `month/user/${user.id}`;
  const params = { data };

  return post({ path, params, auth: true, token });
};