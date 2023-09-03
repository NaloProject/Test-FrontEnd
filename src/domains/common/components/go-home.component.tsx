import { HTMLAttributes } from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import Link from 'next/link'

import { CNM } from '@helpers/classes'

type PGoHome = HTMLAttributes<HTMLAnchorElement>

const GoHome: FC<PGoHome> = ({ className }) => {
	return (
		<Link
			href={'/'}
			className={CNM(
				`bg-gray-50 text-xs hover:bg-nalo-pink
			             py-2.5 px-3.5 inline-flex items-center gap-1.5 rounded-md transition-all`,
				className ?? '',
			)}
		>
			<BiHomeAlt />

			<span>Back to home</span>
		</Link>
	)
}

export { GoHome }
