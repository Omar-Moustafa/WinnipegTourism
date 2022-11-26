import { render } from '@redwoodjs/testing/web'

import TransactionCompletePage from './TransactionCompletePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TransactionCompletePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TransactionCompletePage />)
    }).not.toThrow()
  })
})
