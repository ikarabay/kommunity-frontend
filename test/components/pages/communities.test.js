import React from 'react';
import CommunityList from '@/components/pages/communities';
import { mount } from '../../test-utils/render';

describe('Components: <CommunityList />', () => {
  test('renders without exploding', () => {
    const wrapper = mount(<CommunityList />);
    expect(wrapper.html()).toContain('div');
  });
});
