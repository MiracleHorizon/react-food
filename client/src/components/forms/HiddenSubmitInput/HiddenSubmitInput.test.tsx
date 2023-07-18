import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { HiddenSubmitInput } from './HiddenSubmitInput'

test('Testing HiddenSubmitInput component', () => {
  render(<HiddenSubmitInput />)

  const input = screen.getByTestId('hidden-submit-input')

  expect(input).toBeInTheDocument()
  expect(input).not.toBeVisible()
})
