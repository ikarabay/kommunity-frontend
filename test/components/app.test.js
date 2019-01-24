import React from 'react';
import { mount } from '../test-utils/render';
import App from '@/components/app';

describe('Components: <App />', () => {
  test('renders without exploding', () => {
    const wrapper = mount(<App />);
    expect(wrapper.html()).toContain('header');
  });
});
