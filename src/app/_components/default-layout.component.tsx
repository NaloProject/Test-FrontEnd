import Image from 'next/image'

import { assets } from '@assets'

import { Layout } from '@layout'

const DefaultLayout: FCC = ({ children }) => {
	return (
		<>
			<Layout.Header>
				<Image
					src={assets.logos.main}
					alt={'Nalo'}
					width={80}
					height={27}
				/>

				<span
					className={`px-3 py-1 rounded bg-gradient-to-r from-nalo-pink
						to-nalo-purple text-white italic text-sm`}
				>
					The best NFT's market place!
				</span>
			</Layout.Header>

			<Layout.Main>{children}</Layout.Main>

			<Layout.Footer>
				<p className={'text-sm italic'}>© 2023 Nalo</p>
			</Layout.Footer>
		</>
	)
}

export { DefaultLayout }
