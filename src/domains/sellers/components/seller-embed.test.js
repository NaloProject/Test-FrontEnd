import {
	getByRole,
	getByTestId,
	getByText,
	render,
} from '@testing-library/react'

import '@testing-library/jest-dom'

import { SellerEmbed } from './seller-embed.component'

describe('Sellers Embed Component', () => {
	const sellerFallbacksMock = {
		name: 'John Doe',
		id: 4242,
		isVerified: false,
		avatar: '',
	}
	it('renders a seller embed with fallbacks', () => {
		const { container } = render(
			<SellerEmbed seller={sellerFallbacksMock} />,
		)

		const name = getByText(container, 'John Doe')
		const img = getByRole(container, 'img')

		expect(name).toBeInTheDocument()
		expect(img).toBeInTheDocument()
		expect(img).toHaveAttribute('alt', 'Default Avatar')
	})

	const sellerVerifiedMock = {
		name: 'John Doe',
		id: 4242,
		isVerified: true,
		avatar: '',
	}
	it('renders a seller with verified status', () => {
		const { container } = render(
			<SellerEmbed seller={sellerVerifiedMock} />,
		)

		const verified = getByTestId(container, 'seller-verified')

		expect(verified).toBeInTheDocument()
	})
})
