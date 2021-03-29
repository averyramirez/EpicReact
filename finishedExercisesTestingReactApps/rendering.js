// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
import {render} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const {container} = render(<Counter />)

  const [decrement, increment] = container.querySelectorAll('button')
  const message = container.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0')

  // 🐨 replace the next two statements with `fireEvent.click(button)`
  const incrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  increment.dispatchEvent(incrementClickEvent)
  expect(message.textContent).toBe('Current count: 1')
  const decrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  decrement.dispatchEvent(decrementClickEvent)
  expect(message.textContent).toBe('Current count: 0')
})
