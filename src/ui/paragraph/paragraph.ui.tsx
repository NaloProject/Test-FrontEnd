import { HTMLAttributes } from 'react'

import { CNM } from '@helpers/classes'

type PParagraph = HTMLAttributes<HTMLParagraphElement>

const Paragraph: FCC<PParagraph> = ({ children, className }) => {
	return (
		<p
			className={CNM(
				'text-gray-500 text-sm font-medium',
				className ?? '',
			)}
		>
			{children}
		</p>
	)
}

export { Paragraph }
