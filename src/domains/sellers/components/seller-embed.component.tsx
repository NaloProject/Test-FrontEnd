import { BsCheck } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

import { ISeller } from '@domains/sellers'

import { assets } from '@assets'

type PSellerEmbed = {
	seller: ISeller
}

const SellerEmbed: FC<PSellerEmbed> = ({ seller }) => {
	const { name, isVerified, avatar, id } = seller

	return (
		<Link
			href={`/seller/${id}`}
			className={`ring-2 ring-nalo-pink/0 hover:ring-nalo-pink/100
			 rounded-full p-1.5 transition-all duration-300`}
		>
			<article className={'text-base flex items-center gap-3'}>
				<div className={'relative flex-shrink-0'}>
					<Image
						src={avatar ? avatar : assets.avatar.fallback}
						alt={avatar ? `${name} avatar` : 'Default Avatar'}
						width={45}
						height={45}
						className={
							'rounded-full shadow object-cover object-center'
						}
					/>

					{isVerified && (
						<span
							className={`absolute bg-blue-600 bottom-0
							right-1 rounded-full`}
							data-testid={'seller-verified'}
						>
							<BsCheck
								color={'#FFFFFF'}
								size={11}
							/>
						</span>
					)}
				</div>

				<span className={'font-medium text-base'}>{name}</span>
			</article>
		</Link>
	)
}

export { SellerEmbed }
