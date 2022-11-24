import { render } from '@redwoodjs/testing/web'

import CuisinePage from './CuisinePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CuisinePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CuisinePage />)
    }).not.toThrow()
  })
})
