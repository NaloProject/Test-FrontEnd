import { HTMLAttributes } from 'react'

import { FooterLayout } from './footer.layout'
import { HeaderLayout } from './header.layout'
import { MainLayout } from './main.layout'

import { CNM } from '@helpers/classes'

enum Variant {
	HOMEPAGE,
	NEWS,
}
const VARIANT_MAPS: Record<Variant, string> = {
	[Variant.HOMEPAGE]: 'grid-rows-home-layout grid-cols-1',
	[Variant.NEWS]: 'grid-rows-news-layout',
}

type TLayout<P> = FC<P> & {
	Header: typeof HeaderLayout
	Main: typeof MainLayout
	Footer: typeof FooterLayout
	variant: typeof Variant
}
type PLayout = HTMLAttributes<HTMLBodyElement> & {
	variant?: Variant
}

const Layout: TLayout<PLayout> = ({
	children,
	className,
	variant = Variant.HOMEPAGE,
	...rest
}) => {
	return (
		<body
			className={CNM(
				`grid min-h-screen w-screen gap-12 px-6 md:px-12
				overflow-x-hidden overflow-y-auto`,
				VARIANT_MAPS[variant],
				className ?? '',
			)}
			{...rest}
		>
			{children}
		</body>
	)
}

Layout.Header = HeaderLayout
Layout.Footer = FooterLayout
Layout.Main = MainLayout

Layout.variant = Variant

export { Layout }
