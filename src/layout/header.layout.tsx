import { HTMLAttributes } from 'react'

import { CNM } from '@helpers/classes'

type PHeaderLayout = HTMLAttributes<HTMLElement>

const HeaderLayout: FC<PHeaderLayout> = ({ children, className, ...rest }) => {
	return (
		<header
			className={CNM(
				`px-6 py-3 bg-white shadow-box rounded-b-2xl
				flex items-center justify-between gap-6 text-right w-full max-w-[50rem] mx-auto`,
				className ?? '',
			)}
			{...rest}
		>
			{children}
		</header>
	)
}

export { HeaderLayout }
