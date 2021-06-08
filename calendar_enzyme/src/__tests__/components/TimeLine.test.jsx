import { shallow } from 'enzyme'
import React from 'react'
import TimeLine from '../../components/timeLine/TimeLine'

describe("<TimeLine />", () => {
  const wrappedComponent = shallow(<TimeLine />)

  it('should render component', () => {
    expect(wrappedComponent).toMatchSnapshot()
  })
});