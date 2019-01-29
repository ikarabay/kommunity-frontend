import PropTypes from 'prop-types';
import qs from 'query-string';
import React from 'react';
import { Redirect, withRouter } from 'react-router';

import Header from '@/containers/common/header';
import { Button } from '@/components/ui';
import ResetPasswordForm from '@/containers/pages/login/reset-password-form';
import FormTemplate from '../common/form-template';

class ResetPassword extends React.Component {
  state = {
    redirectToLogin: false,
    token: '',
  };

  componentDidMount() {
    const { history } = this.props;
    const { token } = qs.parse(history.location.search);
    this.setState({
      redirectToLogin: !token,
      token,
    });
  }

  render() {
    const { history } = this.props;
    const { redirectToLogin, token } = this.state;

    // no token, redirect to login
    if (redirectToLogin) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <Header extraClassName="justify-between" inline>
          Remember your password?
          <Button
            extraClassName="font-medium text-base pl-2 pr-2"
            size="small"
            styleType="plain"
            label="Log in now."
            onClick={() => history.push('/login')}
          />
        </Header>
        <div className="w-82 m-0 mx-auto">
          <FormTemplate
            additionalProps={{ token }}
            Form={ResetPasswordForm}
            subTitle="Enter a new password"
            title="Reset Password"
          />
        </div>
      </div>
    );
  }
}

ResetPassword.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
};

export default withRouter(ResetPassword);
