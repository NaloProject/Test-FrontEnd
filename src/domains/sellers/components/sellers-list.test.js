import { getAllByRole, getByRole, render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { SellersList } from './sellers-list.component'

async function resolvedComponent(Component, props) {
	const ComponentResolved = await Component(props)
	return () => ComponentResolved
}

describe('Sellers List Component', () => {
	it('renders a list of sellers embeds', async () => {
		const SellersListResolved = await resolvedComponent(SellersList)
		const { container } = render(<SellersListResolved />)

		const list = getByRole(container, 'list')
		const items = getAllByRole(container, 'listitem')
		const articles = getAllByRole(container, 'article')
		const links = getAllByRole(container, 'link')

		expect(items).toHaveLength(7)
		expect(articles).toHaveLength(7)
		expect(links).toHaveLength(7)

		expect(list).toBeInTheDocument()
	})

	it('renders valid sellers embed', async () => {
		const SellersListResolved = await resolvedComponent(SellersList)
		const { container } = render(<SellersListResolved />)

		const links = getAllByRole(container, 'link')
		const items = getAllByRole(container, 'listitem')

		expect(items[0]).toHaveTextContent('Richard Noga')
		expect(items[1]).toHaveTextContent('Pingu')
		expect(items[2]).toHaveTextContent('DoggieBoy')

		expect(links[0]).toHaveAttribute('href', '/seller/2323')
		expect(links[1]).toHaveAttribute('href', '/seller/2343')
		expect(links[2]).toHaveAttribute('href', '/seller/4321')
	})
})
