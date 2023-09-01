import '@styles/globals.css'

import { Inter, Maven_Pro } from 'next/font/google'
import Image from 'next/image'

import type { Metadata } from 'next'

import { assets } from '@assets'

import { Layout } from '@layout'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})
const maven_pro = Maven_Pro({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-maven-pro',
})

export const metadata: Metadata = {
	title: 'Nalo Technical Test',
	description: 'hello; world!',
}

const RootLayout: FCC = ({ children }) => {
	return (
		<html
			lang='en'
			className={`${inter.variable} ${maven_pro.variable}`}
		>
			<Layout>
				<Layout.Header>
					<Image
						src={assets.logos.main}
						alt={'Nalo'}
						width={80}
						height={27}
					/>

					<span
						className={`px-3 py-1 rounded bg-gradient-to-r from-nalo-pink
						to-nalo-purple text-white italic text-sm `}
					>
						The best NFT's market place!
					</span>
				</Layout.Header>

				<Layout.Main>{children}</Layout.Main>

				<Layout.Footer>
					<p className={'text-sm italic'}>© 2023 Nalo</p>
				</Layout.Footer>
			</Layout>
		</html>
	)
}

export default RootLayout
