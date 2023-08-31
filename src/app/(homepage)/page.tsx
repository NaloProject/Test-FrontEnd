'use client'

import useSWRImmutable from 'swr/immutable'

import { endpoints } from '@config'

const NftList = () => {
	const {
		data: nftsList,
		isLoading,
		error,
	} = useSWRImmutable([endpoints.nfts])

	if (isLoading) return <div>loading...</div>
	if (error) return <div>failed to load</div>

	//TODO add Type
	return (
		<section>
			{nftsList.map((nft: any) => {
				return <div key={nft.id}>{nft.name}</div>
			})}
		</section>
	)
}

const SellersList = () => {
	const {
		data: sellersList,
		isLoading,
		error,
	} = useSWRImmutable([endpoints.sellers])

	if (isLoading) return <div>loading...</div>
	if (error) return <div>failed to load</div>

	//TODO add Type
	return (
		<section>
			{sellersList.map((seller: any) => {
				return <div key={seller.id}>{seller.name}</div>
			})}
		</section>
	)
}

const Home = () => {
	return (
		<>
			<NftList />
			<SellersList />
		</>
	)
}

export default Home
