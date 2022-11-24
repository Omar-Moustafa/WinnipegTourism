import { render } from '@redwoodjs/testing/web'

import TransportationPage from './TransportationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TransportationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TransportationPage />)
    }).not.toThrow()
  })
})
