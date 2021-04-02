const apiUrl = (
  process.env.REACT_APP_PATH_API || 'http://127.0.0.1:4000/'
);

const createUrl = (path) => `${apiUrl}${path}`;

const defaultHeaders = ({
  'Content-Type': 'application/json'
});

const createAuthenticatedHeaders = (token) => ({
  ...defaultHeaders,
  'Authorization': `Bearer ${token}`
});

const request = (method, { path, params, auth = false, token, headers }) => {
  const _headers = (auth ? createAuthenticatedHeaders(token) : defaultHeaders);
  const _options = {
    method,
    headers: {
      ..._headers,
      ...headers
    },
    body: JSON.stringify(params)
  };

  return fetch(
    createUrl(path),
    _options
  );
};

export const post = (props) => request('POST', props);

export const get = (props) => request('GET', props);

