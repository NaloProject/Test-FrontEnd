import { getByRole, getByText, render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import { DefaultLayout } from './default-layout.component'

describe('Default Layout', () => {
	it('renders a header element', () => {
		render(<DefaultLayout />)

		const header = screen.getByRole('banner')
		const logo = getByRole(header, 'img', {
			name: 'Nalo',
		})
		const catchphrase = getByText(header, "The best NFT's market place!")

		expect(header).toBeInTheDocument()
		expect(logo).toBeInTheDocument()
		expect(catchphrase).toBeInTheDocument()
	})

	it('renders a main element', () => {
		const { container } = render(<DefaultLayout />)

		const main = container.querySelector('main')

		expect(main).toBeInTheDocument()
	})

	it('renders a footer element', () => {
		const { container } = render(<DefaultLayout />)

		const footer = container.querySelector('footer')
		const copyright = getByText(footer, '© 2023 Nalo')

		expect(footer).toBeInTheDocument()
		expect(copyright).toBeInTheDocument()
	})
})
