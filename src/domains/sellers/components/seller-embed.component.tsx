import { BsCheck } from 'react-icons/bs'
import Image from 'next/image'

import { ISeller } from '../types'
import { SellerTotalSell } from './seller-total-sell.component'

import { CNM } from '@helpers/classes'
import { assets } from '@assets'

type PSellerEmbed = {
	seller: ISeller
	showTotalSell?: boolean
	size?: 'small' | 'normal'
}

const SellerEmbed: FC<PSellerEmbed> = ({
	seller,
	showTotalSell = false,
	size = 'normal',
}) => {
	const { name, isVerified, avatar, id } = seller

	const isSmall = size === 'small'

	return (
		<article
			className={CNM(
				'flex items-center',
				isSmall ? 'text-sm gap-2' : 'text-base gap-3',
			)}
		>
			<div className={'relative flex-shrink-0'}>
				<Image
					src={avatar ? avatar : assets.avatar.fallback}
					alt={avatar ? `${name} avatar` : 'Default Avatar'}
					width={isSmall ? 30 : 45}
					height={isSmall ? 30 : 45}
					className={`rounded-full shadow object-cover object-center`}
				/>

				{isVerified && (
					<span
						className={CNM(
							`absolute bg-blue-600 bottom-0 rounded-full`,
							isSmall ? '-right-0.5' : 'right-1',
						)}
						data-testid={'seller-verified'}
					>
						<BsCheck
							color={'#FFFFFF'}
							size={11}
						/>
					</span>
				)}
			</div>

			<div className={'flex flex-col'}>
				<span className={'font-medium'}>{name}</span>

				{showTotalSell ? <SellerTotalSell sellerId={id} /> : null}
			</div>
		</article>
	)
}

export { SellerEmbed }
