import { promises as fs } from 'fs'
import path from 'path'

import { ISeller, TSellerID } from '@domains/sellers'

export const getSellers = () => {
	const jsonDirectory = path.join(process.cwd(), 'src/data')

	return fs.readFile(jsonDirectory + '/data.json', 'utf8').then((data) => {
		return JSON.parse(data)['bestSellers'] as ISeller[]
	})
}

export const getSeller = (sellerId: TSellerID) => {
	const jsonDirectory = path.join(process.cwd(), 'src/data')

	return fs.readFile(jsonDirectory + '/data.json', 'utf8').then((data) => {
		const allSellers = JSON.parse(data)['bestSellers'] as ISeller[]

		return allSellers.find((seller) => seller.id === sellerId)
	})
}
