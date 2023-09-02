import { ElementType } from 'react'

import { IPolymorphicComponent } from '@ctypes/helpers.types'

import { CNM } from '@helpers/classes'

enum Color {
	BLACK,
}
enum Weight {
	NORMAL,
	MEDIUM,
	BOLD,
}
enum Size {
	SMALL,
	DEFAULT,
	LARGE,
	XLARGE,
	XXLARGE,
}

const COLOR_MAPS: Record<Color, string> = {
	[Color.BLACK]: 'text-black',
}
const WEIGHT_MAPS: Record<Weight, string> = {
	[Weight.NORMAL]: 'font-normal',
	[Weight.MEDIUM]: 'font-medium',
	[Weight.BOLD]: 'font-bold',
}
const SIZE_MAPS: Record<Size, string> = {
	[Size.SMALL]: 'text-sm',
	[Size.DEFAULT]: 'text-base',
	[Size.LARGE]: 'text-lg',
	[Size.XLARGE]: 'text-xl',
	[Size.XXLARGE]: 'text-2xl',
}

type PTitle = {
	variant?: Color
	size?: Size
	weight?: Weight
	escaped?: string
}

const Title = <T extends ElementType = 'h1'>({
	as,
	children,
	variant = Color.BLACK,
	size = Size.DEFAULT,
	weight = Weight.NORMAL,
	className,
	escaped,
	...props
}: IPolymorphicComponent<T, PTitle>) => {
	const Tag = as || 'h1'

	return (
		<Tag
			dangerouslySetInnerHTML={escaped ? { __html: escaped } : undefined}
			className={CNM(
				COLOR_MAPS[variant],
				SIZE_MAPS[size],
				WEIGHT_MAPS[weight],
				className ?? '',
			)}
			{...props}
		>
			{children && !escaped ? children : null}
		</Tag>
	)
}

Title.variant = Color
Title.size = Size
Title.weight = Weight

export { Title }
