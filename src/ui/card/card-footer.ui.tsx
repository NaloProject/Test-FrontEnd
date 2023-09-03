import { HTMLAttributes } from 'react'

import { CNM } from '@helpers/classes'

type PCardFooter = HTMLAttributes<HTMLDivElement>

const CardFooter: FCC<PCardFooter> = ({ children, className }) => {
	return <div className={CNM('p-4', className ?? '')}>{children}</div>
}

export { CardFooter }
