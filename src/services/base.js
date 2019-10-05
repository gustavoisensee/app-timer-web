const apiUrl = (
  process.env.REACT_APP_PATH_API || 'https://my-finances-api.netlify.com/.netlify/functions/api/'
);

const createUrl = (path) => `${apiUrl}${path}`;

const defaultOptions = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
};

const createAuthenticatedHeaders = (token) => ({
  headers: {
    ...defaultOptions.headers,
    'Authorization': `Bearer ${token}`
  }
});

const request = (method, { path, params, auth = false, token }) => {
  const options = (auth ? createAuthenticatedHeaders(token) : defaultOptions);
  const _options = {
    method,
    ...options,
    body: JSON.stringify(params)
  };

  return fetch(
    createUrl(path),
    _options
  );
};

export const post = (props) => request('POST', props);

export const get = (props) => request('GET', props);

