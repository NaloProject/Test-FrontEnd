import { HTMLAttributes } from 'react'

import { CardBody } from './card-body.ui'
import { CardFooter } from './card-footer.ui'

type TCard<P> = FC<P> & {
	Body: typeof CardBody
	Footer: typeof CardFooter
}
type PCard = HTMLAttributes<HTMLDivElement> & {}

const Card: TCard<PCard> = ({ children }) => {
	return (
		<div
			className={`h-full border border-gray-200 rounded-xl
			shadow-sm divide-y divide-gray-200 flex flex-col
			justify-between group-hover:shadow-box transition-all`}
		>
			{children}
		</div>
	)
}

Card.Body = CardBody
Card.Footer = CardFooter

export { Card }
