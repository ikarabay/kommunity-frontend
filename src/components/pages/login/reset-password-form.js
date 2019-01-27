import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router';

import { Button, Input, Notification, Icon } from '@/components/ui';

class ResetPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      error: '',
      password: '',
      retryPassword: '',
    };
  }

  handleSubmit = e => {
    const { retryPassword, password } = this.state;
    const { history, resetPassword, token } = this.props;
    e.preventDefault();

    this.setState({ error: '' });

    if (retryPassword !== password) {
      const validationMessage = 'Passwords do not match.';
      return this.setState({
        error: validationMessage,
      });
    }

    return resetPassword({ variables: { newPassword: password, token } })
      .then(() => {
        this.setState({ disabled: false, password: '', retryPassword: '', success: true });
        setTimeout(() => history.push('/login'), 3000);
      })
      .catch(serverError => {
        const error = serverError.graphQLErrors.length && serverError.graphQLErrors[0].message;
        this.setState({
          disabled: false,
          error: error || 'Error occured, please try again later.',
          password: '',
          retryPassword: '',
        });
      });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { disabled, error, password, retryPassword, success } = this.state;

    return (
      <div>
        {error && <Notification styleType="danger" text={error} flat />}
        {success && (
          <Notification
            styleType="success"
            text="Your password has been reset, redirecting you to login page in 3 seconds."
          />
        )}
        <form onSubmit={this.handleSubmit}>
          <Input
            extraClassName="w-full block"
            type="password"
            name="password"
            id="password"
            placeholder="New Password"
            value={password}
            onChange={this.handleInputChange}
            required
            iconLeft={<Icon name="Lock" className="text-lightBlueGrey" />}
            extraWrapperClassName="my-4"
          />
          <Input
            extraClassName="w-full block"
            type="password"
            name="retryPassword"
            id="retry-password"
            placeholder="Confirm Password"
            value={retryPassword}
            onChange={this.handleInputChange}
            required
            iconLeft={<Icon name="Lock" className="text-lightBlueGrey" />}
            extraWrapperClassName="my-4"
          />
          <Button
            extraClassName="w-full block mt-4 font-semibold"
            size="large"
            styleType="primary"
            type="submit"
            label={disabled ? '...' : 'Reset Password'}
            disabled={disabled}
          />
        </form>
      </div>
    );
  }
}

ResetPasswordForm.propTypes = {
  history: PropTypes.object,
  resetPassword: PropTypes.func,
  token: PropTypes.string,
};

export default withRouter(ResetPasswordForm);
