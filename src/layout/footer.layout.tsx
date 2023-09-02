import { HTMLAttributes } from 'react'

import { CNM } from '@helpers/classes'

type PFooterLayout = HTMLAttributes<HTMLElement>

const FooterLayout: FC<PFooterLayout> = ({ children, className, ...rest }) => {
	return (
		<footer
			className={CNM(
				`w-full max-w-[50rem] mx-auto flex justify-end`,
				className ?? '',
			)}
			{...rest}
		>
			<div className={'px-4 pb-2 pt-3 bg-white shadow-box rounded-t-2xl'}>
				{children}
			</div>
		</footer>
	)
}

export { FooterLayout }
