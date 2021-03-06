import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Button, Input, Notification, Icon } from '@/components/ui';

// TODO use captcha to block brute force
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      email: '',
      error: null, // server error
      password: '',
      // response: null,
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { login, onClose, userLoggedIn } = this.props;
    this.setState({ disabled: true });

    try {
      await login({ variables: { email, password } });
      userLoggedIn();
      // only popups have onClose
      if (onClose) {
        onClose();
      }
      // TODO implement boarding page
      // history.push('/boarding');
    } catch (serverError) {
      const error = serverError.graphQLErrors.length && serverError.graphQLErrors[0].message;
      this.setState({
        disabled: false,
        error: { message: error || 'Server is not responding.' },
      });
    }
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password, disabled, error } = this.state;

    return (
      <div>
        {error && <Notification styleType="danger" text={error.message} flat />}
        <form onSubmit={this.handleSubmit}>
          <Input
            extraClassName="w-full block"
            name="email"
            type="text"
            id="login-username"
            placeholder="your username"
            value={email}
            onChange={this.handleInputChange}
            required
            iconLeft={<Icon name="User" className="text-lightBlueGrey" />}
            extraWrapperClassName="my-4"
          />
          <Input
            extraClassName="w-full block"
            type="password"
            name="password"
            id="login-password"
            placeholder="your password"
            value={password}
            onChange={this.handleInputChange}
            required
            iconLeft={<Icon name="Lock" className="text-lightBlueGrey" />}
            extraWrapperClassName="my-4"
          />
          <Button
            extraClassName="w-full block my-4 font-semibold"
            size="large"
            styleType="primary"
            type="submit"
            label={disabled ? '...' : 'Login'}
            disabled={disabled}
          />
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  // history: PropTypes.object,
  login: PropTypes.func,
  onClose: PropTypes.func,
  userLoggedIn: PropTypes.func,
};

export default withRouter(LoginForm);
