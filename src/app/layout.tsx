import '@styles/globals.css'

import { Inter, Maven_Pro } from 'next/font/google'

import { DefaultLayout } from './_components/default-layout.component'

import type { Metadata } from 'next'

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
				<DefaultLayout>{children}</DefaultLayout>
			</Layout>
		</html>
	)
}

export default RootLayout
