import { AiOutlineFire } from 'react-icons/ai'
import { BiHeart } from 'react-icons/bi'
import Image from 'next/image'

import { Card } from '../../../ui/card'

import { INFT } from '@domains/nfts'
import { NftCardSeller } from '@domains/nfts/components/nft-card-seller.component'

import { Title } from '@ui'

type PNftCard = {
	nft: INFT
}

const NftCard: FC<PNftCard> = ({
	nft: {
		image,
		totalMinted,
		sellerId,
		forSale,
		isHot,
		like,
		timeLeft,
		name,
		price,
	},
}) => {
	return (
		<Card>
			<Card.Body>
				<div className={'relative'}>
					<Image
						src={image}
						alt={name}
						width={400}
						height={300}
						className={
							'object-cover object-center rounded-xl w-full'
						}
					/>

					{isHot && timeLeft ? (
						<div
							className={`absolute bottom-4 left-4 px-2.5 py-1.5 font-medium
							rounded text-xs bg-white flex items-center gap-1`}
						>
							{timeLeft}&nbsp;left
							<AiOutlineFire />
						</div>
					) : null}
				</div>

				<div className={'grid grid-cols-[65%_35%] justify-between'}>
					<div>
						<Title
							as={'h3'}
							className={`whitespace-nowrap overflow-hidden overflow-ellipsis`}
							weight={Title.weight.MEDIUM}
						>
							{name}
						</Title>

						<span className={'block mt-0.5 text-xs text-gray-400'}>
							{totalMinted}&nbsp;Editions Minted
						</span>
					</div>

					<span
						className={`ml-2 mt-1 text-right text-xs
						text-green-500 font-medium`}
					>
						{forSale} for sale
					</span>
				</div>

				<NftCardSeller sellerId={sellerId} />
			</Card.Body>

			<Card.Footer>
				<div
					className={`grid grid-cols-[65%_35%]
					items-center justify-between`}
				>
					<div>
						<span className={'block text-sm font-medium'}>
							{price}&nbsp;ETH
						</span>

						<span className={'block text-xs text-gray-400'}>
							Starting Bid
						</span>
					</div>

					<div className={'text-right ml-2'}>
						<button
							type={'button'}
							className={`ml-auto text-xs text-gray-400
							font-medium inline-flex items-center gap-1 group hover:text-red-500`}
						>
							{like}
							<BiHeart
								className={`group-hover:fill-red-500 mt-0.5`}
							/>
						</button>
					</div>
				</div>
			</Card.Footer>
		</Card>
	)
}

export { NftCard }
