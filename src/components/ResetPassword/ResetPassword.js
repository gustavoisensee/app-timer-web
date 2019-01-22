import React, { PureComponent } from 'react';
import './ResetPassword.scss';

class ResetPassword extends PureComponent {
  render() {
    const {
      errors,
      isSubmitting,
      handleBlur,
      handleChange,
      handleSubmit,
      values
    } = this.props;

    return (
      <div className='ResetPassword'>
        <form onSubmit={handleSubmit}>
          <h2>
            App timer web - reset password
          </h2>
          <input
            type='password'
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.password}
            name='password'
            className={errors.password && 'input-error'}
          />
          <button
            type='submit'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Reset'}
          </button>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
