import cls from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Button, Paragraph, Popup, Title } from '@/components/ui';

const styles = {
  shareButtons: 'w-full mx-2 h-14 font-bold',
};

const SignupForBetaSuccess = ({ showPopup, onClosePopup }) => (
  <Popup show={showPopup} wrapperExtraClassName="text-center" onClose={onClosePopup}>
    <img className="pointer-events-none" src="/images/landing/window.svg" alt="Hey!" />
    <Title type="h5" extraClassName="font-extrabold mt-6 mb-2">
      Thanks for signing up!
    </Title>
    <Paragraph extraClassName="mb-8">Show some love for makers :)</Paragraph>
    <div className="buttons flex justify-around">
      <Button
        extraClassName={cls(styles.shareButtons, 'bg-twitter')}
        styleType="primary"
        size="medium"
        label="Tweet"
        type="button"
        iconLeft="Twitter"
      />
      <Button
        extraClassName={cls(styles.shareButtons, 'bg-facebook')}
        styleType="primary"
        size="medium"
        label="Share"
        type="button"
        iconLeft="Facebook"
      />
    </div>
  </Popup>
);

SignupForBetaSuccess.propTypes = {
  onClosePopup: PropTypes.func,
  showPopup: PropTypes.func,
};

export default SignupForBetaSuccess;
