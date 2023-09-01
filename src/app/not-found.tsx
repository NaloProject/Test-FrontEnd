import { FC } from 'react'
import Link from 'next/link'

const NotFound: FC = () => {
	return (
		<div className='text-vercel-pink space-y-4'>
			<h2 className='text-lg font-bold'>Not Found</h2>

			<p className='text-sm'>Could not find requested resource</p>

			<Link href='/'>Return Home</Link>
		</div>
	)
}

export default NotFound
