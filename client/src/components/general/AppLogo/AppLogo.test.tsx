import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { AppLogo } from './AppLogo'
import { APP_TITLE } from '@constants/seo'

test('Testing AppLogo component', () => {
  render(<AppLogo />)

  const title = screen.getByTestId('title')

  expect(title).toHaveTextContent(APP_TITLE)
})
