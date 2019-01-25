import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Icon, Input, Paragraph } from '@/components/ui';
import MailSignupSuccess from '@/components/common/popup-mail-signup-success';
import { mailPattern, EMAIL_LIST_IDS } from '@/constants';

class MailSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      showPopup: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email } = this.state;
    const { subscribeToMailList } = this.props;

    subscribeToMailList({ variables: { email, listId: EMAIL_LIST_IDS.BETA_SIGNUP } })
      .then(() =>
        this.setState({
          email: '',
          showPopup: true,
        }),
      )
      .catch(() => {});
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onClosePopup = () => {
    this.setState({
      showPopup: false,
    });
  };

  render() {
    const { email, showPopup } = this.state;
    return (
      <div>
        <Paragraph className="leading-base text-blueyGrey text-xs mb-6 uppercase tracking-tight">
          Newsletter
        </Paragraph>
        <Paragraph>Subscribe to our updates</Paragraph>
        <form onSubmit={this.handleSubmit}>
          <Input
            extraClassName="w-full block"
            iconRight={<Icon name="Send" className="text-primary cursor-pointer" />}
            id="mail-signup"
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            pattern={mailPattern}
            placeholder="Email address"
          />
        </form>
        <MailSignupSuccess showPopup={showPopup} onClosePopup={this.onClosePopup} />
      </div>
    );
  }
}

MailSignup.propTypes = {
  subscribeToMailList: PropTypes.func,
};

export default MailSignup;
