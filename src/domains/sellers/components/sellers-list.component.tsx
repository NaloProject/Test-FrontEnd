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
				return (
					<li
						key={seller.id}
						className={`text-xs [counter-increment:sellers-list] flex
						items-center gap-2 before:text-gray-400 before:font-medium
						before:[content:counters(sellers-list,'.',decimal-leading-zero)]`}
					>
						<SellerEmbed seller={seller} />
					</li>
				)
			})}
		</ul>
	)
}

export { SellersList }
