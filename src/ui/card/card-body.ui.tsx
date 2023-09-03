import { HTMLAttributes } from 'react'

import { CNM } from '@helpers/classes'

type PCardBody = HTMLAttributes<HTMLDivElement>

const CardBody: FCC<PCardBody> = ({ children, className }) => {
	return (
		<div className={CNM('px-4 pt-4 pb-5 space-y-4', className ?? '')}>
			{children}
		</div>
	)
}

export { CardBody }
