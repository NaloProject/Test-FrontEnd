import { FC } from 'react'

import { HomeSellers } from './home-sellers.component'

const HomePage: FC = () => {
	return (
		<div className={'max-w-4xl mx-auto'}>
			<HomeSellers />

			{/*<HomeNfts />*/}
		</div>
	)
}

export default HomePage
