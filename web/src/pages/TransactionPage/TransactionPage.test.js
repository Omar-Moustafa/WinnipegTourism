import { render } from '@redwoodjs/testing/web'

import TransactionPage from './TransactionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TransactionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TransactionPage />)
    }).not.toThrow()
  })
})
