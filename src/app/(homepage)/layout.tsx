'use client'

import { PropsWithChildren } from 'react'
import { SWRConfig } from 'swr'

import { fetchRequest } from '@services'

const HomeLayout = ({ children }: PropsWithChildren) => {
	return (
		<SWRConfig
			value={{ fetcher: fetchRequest, refreshInterval: 1000 * 60 * 10 }}
		>
			<main>{children}</main>
		</SWRConfig>
	)
}

export default HomeLayout
