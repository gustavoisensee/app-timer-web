import React from 'react';
import ReactDOM from 'react-dom';
import ResetPassword from './ResetPassword';

it('ResetPassword - renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ResetPassword
      values={{ password: 'test' }}
      errors={{}}
      handleBlur={() => {}}
      handleChange={() => {}}
      handleSubmit={() => {}}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
