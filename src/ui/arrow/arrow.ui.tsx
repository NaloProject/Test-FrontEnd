import { HTMLAttributes } from 'react'
import { HiChevronRight } from 'react-icons/hi'

import { CNM } from '@helpers/classes'

type PArrow = HTMLAttributes<HTMLSpanElement> & {
	label: string
}

const Arrow: FC<PArrow> = ({ label, className }) => {
	return (
		<div className={CNM('rounded-full bg-gray-100 p-3', className ?? '')}>
			<HiChevronRight color={'#858585'} />

			<span className={'sr-only'}>{label}</span>
		</div>
	)
}

export { Arrow }
