import { AiOutlineFire } from 'react-icons/ai'
import Link from 'next/link'

import { getNfts, NftsList } from '@domains/nfts'

import { CNM } from '@helpers/classes'

import { TitleWithImage } from '@components'
import { Arrow, Paragraph } from '@ui'

type PHomeNfts = {
	nftsPage: number
}

const HomeNfts: FC<PHomeNfts> = async ({ nftsPage }) => {
	const { nfts, maxPages } = await getNfts(nftsPage, 4)

	return (
		<section>
			<div className={'mb-7 sm:mb-1'}>
				<TitleWithImage
					label={'Live Auctions'}
					img={AiOutlineFire}
				/>

				<Paragraph className={'mt-2'}>
					Enjoy! The latest hot auctions
				</Paragraph>
			</div>

			<div className={'flex flex-col gap-6'}>
				<div className={'flex items-center gap-2 self-end'}>
					<Link
						href={{
							pathname: '/',
							query: {
								page: nftsPage > 1 ? nftsPage - 1 : 1,
							},
						}}
						scroll={false}
						className={CNM(
							nftsPage <= 1 && 'pointer-events-none opacity-25',
						)}
					>
						<Arrow
							className={'transform rotate-180'}
							label={'Previous'}
						/>
					</Link>

					<Link
						href={{
							pathname: '/',
							query: {
								page: nftsPage + 1,
							},
						}}
						scroll={false}
						className={CNM(
							nftsPage >= maxPages &&
								'pointer-events-none opacity-25',
						)}
					>
						<Arrow label={'Next'} />
					</Link>
				</div>

				<NftsList nfts={nfts} />
			</div>
		</section>
	)
}

export { HomeNfts }
