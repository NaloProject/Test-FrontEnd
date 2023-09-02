import { Suspense } from 'react'
import { LiaPaletteSolid } from 'react-icons/lia'

import { SellersList } from '@domains/sellers'

import { TitleWithImage } from '@components'
import { Loader, Paragraph } from '@ui'

const HomeSellers: FC = () => {
	return (
		<section>
			<div className={'mb-8'}>
				<TitleWithImage
					label={'Best Sellers'}
					img={LiaPaletteSolid}
				/>

				<Paragraph className={'mt-2'}>
					Best seller of this week&apos;s NFTs
				</Paragraph>
			</div>

			<Suspense fallback={<Loader />}>
				<SellersList />
			</Suspense>
		</section>
	)
}

export { HomeSellers }
