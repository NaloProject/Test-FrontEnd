import Link from 'next/link'

import { getSellers } from '../api'
import { SellerEmbed } from './seller-embed.component'

const SellersList: FC = async () => {
	const sellersList = await getSellers()

	return (
		<ul
			className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center
			justify-center lg:grid-cols-4 gap-4 [counter-reset:sellers-list]`}
		>
			{sellersList.map((seller) => {
				const { id } = seller

				return (
					<li
						key={seller.id}
						className={`text-xs [counter-increment:sellers-list] flex
						items-center gap-2 before:text-gray-400 before:font-medium
						before:[content:counters(sellers-list,'.',decimal-leading-zero)]`}
					>
						<Link
							href={`/seller/${id}`}
							className={`ring-2 ring-nalo-pink/0 hover:ring-nalo-pink/100
			 				rounded-full p-1.5 transition-all duration-300`}
						>
							<SellerEmbed
								seller={seller}
								showTotalSell
							/>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

export { SellersList }
