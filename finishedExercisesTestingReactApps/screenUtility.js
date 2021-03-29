// Avoid implementation details
// http://localhost:3000/counter

import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  render(<Counter />)
  const decrement = screen.getByRoles('button', {name:/decrement/i})
  const increment = screen.getByRoles('button', {name:/decrement/i})
  const message = screen.getByText(/current count/i)

  expect(message).toHaveTextContent('Current count: 0')
  fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')
  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
