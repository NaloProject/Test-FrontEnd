import { IconType } from 'react-icons'

import { Title } from '@ui'

type PTitleWithImage = {
	label: string
	img: IconType
}

const TitleWithImage: FC<PTitleWithImage> = ({ label, img: Icon }) => {
	return (
		<div className={'flex items-center gap-2'}>
			<Title
				size={Title.size.XXLARGE}
				weight={Title.weight.BOLD}
				as={'h2'}
			>
				{label}
			</Title>

			<Icon size={22} />
		</div>
	)
}

export { TitleWithImage }
