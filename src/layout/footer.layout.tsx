import { HTMLAttributes } from 'react'

import { CNM } from '@helpers/classes'

type PFooterLayout = HTMLAttributes<HTMLElement>

const FooterLayout: FC<PFooterLayout> = ({ children, className, ...rest }) => {
	return (
		<footer
			className={CNM(
				`px-4 pb-2 pt-3 bg-white shadow-box
				rounded-t-2xl justify-self-end`,
				className ?? '',
			)}
			{...rest}
		>
			{children}
		</footer>
	)
}

export { FooterLayout }
