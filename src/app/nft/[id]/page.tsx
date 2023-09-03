import { FC } from 'react'

type PNft = {
	params: {
		id: string
	}
}

const Nft: FC<PNft> = ({ params }: { params: { id: string } }) => {
	return <div>My Post: {params.id}</div>
}

export default Nft
