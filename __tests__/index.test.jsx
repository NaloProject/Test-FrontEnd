import React from 'react'
import { render, screen } from '@testing-library/react'
import HomeLink from '../components/common/homeLink/HomeLink'

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomeLink />)

    const heading = screen.getByText('Home');

    expect(heading).toBeInTheDocument()
  })
})
