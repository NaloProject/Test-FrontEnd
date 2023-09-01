import { promises as fs } from 'fs'
import path from 'path'

import { ISeller } from '@domains/sellers'

export const getSellers = () => {
	const jsonDirectory = path.join(process.cwd(), 'src/data')

	return fs.readFile(jsonDirectory + '/data.json', 'utf8').then((data) => {
		return JSON.parse(data)['bestSellers'] as ISeller[]
	})
}
