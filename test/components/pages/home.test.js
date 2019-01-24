import React from 'react';

import { mount } from '../../test-utils/render';
import Home from '@/components/pages/home';

describe('Components: <Home />', () => {
  test('renders without exploding', () => {
    const wrapper = mount(<Home />);
    expect(wrapper.html()).toContain('div');
  });
});
