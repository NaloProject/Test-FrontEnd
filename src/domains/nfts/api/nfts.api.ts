import { promises as fs } from 'fs'
import path from 'path'

import { INFT } from '@domains/nfts'

export const getNfts = () => {
	const jsonDirectory = path.join(process.cwd(), 'src/data')

	return fs.readFile(jsonDirectory + '/data.json', 'utf8').then((data) => {
		return JSON.parse(data)['nfts'] as INFT[]
	})
}
