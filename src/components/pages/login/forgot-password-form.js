import PropTypes from 'prop-types';
import React from 'react';
import { Button, Input, Icon, Notification } from '@/components/ui';
import { mailPattern } from '@/constants';

class ForgotPasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      email: '',
      error: '',
      success: false,
    };

    // reference for invisible captcha
    this.captcha = React.createRef();
  }

  handleSubmit = e => {
    const { email } = this.state;
    const { forgotPassword } = this.props;
    e.preventDefault();

    this.setState({ disabled: true, error: '', success: false });

    forgotPassword({ variables: { email } })
      .then(() => this.setState({ disabled: false, email: '', success: true }))
      .catch(serverError => {
        const error = serverError.graphQLErrors.length && serverError.graphQLErrors[0].message;
        this.setState({
          disabled: false,
          email: '',
          error: error || 'Error occured, please try again later.',
        });
      });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { disabled, email, error, success } = this.state;

    return (
      <div>
        {error && <Notification styleType="danger" text={error} flat />}
        {success && (
          <Notification
            styleType="success"
            text="We just sent an email, please follow the instructions listed there to reset your password."
          />
        )}
        <form onSubmit={this.handleSubmit}>
          <Input
            extraClassName="w-full block"
            name="email"
            type="email"
            placeholder="Mail Address"
            value={email}
            onChange={this.handleInputChange}
            pattern={mailPattern}
            required
            iconLeft={<Icon name="Mail" className="text-lightBlueGrey" />}
            extraWrapperClassName="mt-10"
          />
          <Button
            extraClassName="w-full block mt-8 font-semibold"
            size="large"
            styleType="primary"
            type="submit"
            label={disabled ? '...' : 'Reset Password'}
          />
        </form>
      </div>
    );
  }
}

ForgotPasswordForm.propTypes = {
  forgotPassword: PropTypes.func,
};

export default ForgotPasswordForm;
