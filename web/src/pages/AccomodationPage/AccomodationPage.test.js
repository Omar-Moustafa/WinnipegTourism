import { render } from '@redwoodjs/testing/web'

import AccomodationPage from './AccomodationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AccomodationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccomodationPage />)
    }).not.toThrow()
  })
})
