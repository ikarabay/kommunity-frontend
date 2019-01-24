import React from 'react';

import { mount } from '../../test-utils/render';
import LoginForm from '@/components/pages/login';

describe('Components: <Login />', () => {
  test('renders without exploding', () => {
    const wrapper = mount(<LoginForm />);
    expect(wrapper.html()).toContain('div');
  });
});
