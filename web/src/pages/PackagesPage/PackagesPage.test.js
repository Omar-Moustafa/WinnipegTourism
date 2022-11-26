import { render } from '@redwoodjs/testing/web'

import PackagesPage from './PackagesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PackagesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PackagesPage />)
    }).not.toThrow()
  })
})
