import Link from 'next/link'

import { getNfts } from '../api'
import { NftCard } from './nft-card.component'

import { CNM } from '@helpers/classes'

import { Arrow } from '@ui'

type PNftsList = {
	nftsPage: number
}

const NftsList: FC<PNftsList> = async ({ nftsPage }) => {
	const { nfts, maxPages } = await getNfts(nftsPage, 4)

	return (
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

			<ul
				className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto w-full
				xl:grid-cols-4 gap-5 max-w-[20rem] sm:max-w-[30rem] md:max-w-[40rem] lg:max-w-none`}
			>
				{nfts.map((nft) => {
					const { id } = nft

					return (
						<li key={nft.id}>
							<Link
								href={`/nft/${id}`}
								className={'group'}
							>
								<NftCard nft={nft} />
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export { NftsList }
