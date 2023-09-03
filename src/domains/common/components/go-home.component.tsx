import { HTMLAttributes } from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import Link from 'next/link'

import { Button } from '@ui'

type PGoHome = HTMLAttributes<HTMLAnchorElement>

const GoHome: FC<PGoHome> = (props) => {
	return (
		<Button
			as={Link}
			href={`/`}
			{...props}
		>
			<BiHomeAlt />

			<span>Back to home</span>
		</Button>
	)
}

export { GoHome }
