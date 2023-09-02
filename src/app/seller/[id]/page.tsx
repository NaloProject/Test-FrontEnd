import { FC } from 'react'

type PSellerPage = {
	params: {
		id: string
	}
}

const SellerPage: FC<PSellerPage> = ({
	params,
}: {
	params: { id: string }
}) => {
	return <div>My Post: {params.id}</div>
}

export default SellerPage
