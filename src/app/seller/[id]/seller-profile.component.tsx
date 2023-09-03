import {
	AiOutlineCheckCircle,
	AiOutlineCloseCircle,
	AiOutlineProfile,
} from 'react-icons/ai'
import Image from 'next/image'

import { getSeller, SellerTotalSell, TSellerID } from '@domains/sellers'

import { CNM } from '@helpers/classes'

import { GoHome, TitleWithImage } from '@components'
import { Paragraph, Title } from '@ui'

type PSellerProfile = {
	sellerId: TSellerID
}

const SellerProfile: FC<PSellerProfile> = async ({ sellerId }) => {
	const seller = await getSeller(sellerId)

	if (!seller) return null

	const { name, avatar, isVerified, id } = seller

	return (
		<section>
			<GoHome className={'mb-7'} />

			<div className={'mb-8'}>
				<TitleWithImage
					label={"Seller's Profile"}
					img={AiOutlineProfile}
				/>

				<Paragraph className={'mt-2'}>Go and say hi!</Paragraph>
			</div>

			<div
				className={`inline-flex flex-col sm:flex-row justify-center items-center
				gap-4 border border-gray-300 p-7 sm:p-7 sm:pr-12 rounded-xl`}
			>
				<Image
					src={avatar}
					alt={name}
					width={90}
					height={90}
					className={'rounded-full shadow'}
				/>

				<div>
					<Title
						size={Title.size.XLARGE}
						weight={Title.weight.MEDIUM}
					>
						{name}
					</Title>

					<span
						className={CNM(
							'flex items-center gap-1 text-blue-600',
							isVerified ? 'text-blue-600' : 'text-red-600',
						)}
					>
						{isVerified ? (
							<>
								<AiOutlineCheckCircle
									className={'fill-blue-600'}
								/>
								is verified
							</>
						) : (
							<>
								<AiOutlineCloseCircle
									className={'fill-red-600'}
								/>
								is not verified
							</>
						)}
					</span>

					<div
						className={`mt-1 text-xs text-gray-500 flex items-center gap-1`}
					>
						<span>Total sold&nbsp;:</span>

						<SellerTotalSell sellerId={id} />
					</div>
				</div>
			</div>
		</section>
	)
}

export { SellerProfile }
