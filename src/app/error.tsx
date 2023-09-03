'use client'

import { GoHome } from '@components'
import { Paragraph } from '@ui'

const Error: FC = () => {
	return (
		<div className={'bg-white rounded-xl p-10'}>
			<Paragraph className={'mb-8'}>An error occured</Paragraph>
			<GoHome />
		</div>
	)
}

export default Error
