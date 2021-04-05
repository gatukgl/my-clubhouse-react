import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'

import { RoomCreator } from '../RoomCreator'

describe('Room Creator', () => {
  it('should render component correctly', () => {
    const renderer = new ShallowRenderer()
    const result = renderer.render(<RoomCreator />)
    expect(result).toMatchSnapshot()
  })

  it('should render title properly', () => {
    const component = shallow(<RoomCreator />)
    expect(component.find('Add a topic...'))
  })
})
