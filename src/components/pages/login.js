import React from 'react';

import { Card, Title } from '@/components/ui';
import Header from '@/components/common/header';
import Footer from '@/containers/common/footer';
import LoginForm from '@/containers/pages/login/login-form';
import SignupForm from '@/containers/pages/login/signup-form';

const Auth = () => {
  // TODO handle:
  // - loaded state (redirect to main page?
  // - header doesn't update (expected to see logout link after successful login)
  return (
    <div className="container">
      <Header />
      <div className="flex justify-around py-12">
        <div className="w-5/12">
          <Card shadow="lg">
            <Title type="h5">New member?</Title>
            <Title type="h6">Signup now!</Title>
            <SignupForm />
          </Card>
        </div>
        <div className="w-5/12">
          <Card shadow="lg">
            <Title type="h6">Existing member?</Title>
            <Title type="h5">Login to your account</Title>
            <LoginForm />
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
