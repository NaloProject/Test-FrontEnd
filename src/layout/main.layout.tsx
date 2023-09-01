import { HTMLAttributes } from 'react'

import { CNM } from '@helpers/classes'

type PMainLayout = HTMLAttributes<HTMLElement>

const MainLayout: FC<PMainLayout> = ({ children, className, ...rest }) => {
	return (
		<main
			className={CNM(
				`bg-white self-center justify-self-center
				w-full max-w-6xl p-10 shadow-box rounded-3xl`,
				className ?? '',
			)}
			{...rest}
		>
			{children}
		</main>
	)
}

export { MainLayout }
