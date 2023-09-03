import { FC } from 'react'

import { GoHome } from '@components'
import { Paragraph } from '@ui'

const NotFound: FC = () => {
	return (
		<div className='bg-white p-10 rounded-xl text-vercel-pink space-y-4'>
			<h2 className='text-lg font-bold'>Not Found</h2>

			<Paragraph>Could not find requested resource</Paragraph>

			<GoHome />
		</div>
	)
}

export default NotFound
