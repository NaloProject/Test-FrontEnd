import { ElementType } from 'react'

import { IPolymorphicComponent } from '@ctypes/helpers.types'

import { CNM } from '@helpers/classes'

enum Variant {
	PRIMARY,
	HOLLOW,
}
enum Size {
	NORMAL,
	SMALL,
	BIG,
	PICTO,
}
enum Weight {
	NORMAL,
	MEDIUM,
	BOLD,
}

const SIZE_MAPS: Record<Size, string> = {
	[Size.SMALL]: 'text-xs px-4 pt-1.5 pb-2',
	[Size.NORMAL]: 'text-xs py-2.5 px-3.5',
	[Size.BIG]: 'px-5 py-3.5',
	[Size.PICTO]: 'justify-center p-2',
}
const WEIGHT_MAPS: Record<Weight, string> = {
	[Weight.NORMAL]: 'font-normal',
	[Weight.MEDIUM]: 'font-medium',
	[Weight.BOLD]: 'font-bold',
}
const VARIANT_MAPS: Record<Variant, string> = {
	[Variant.PRIMARY]: 'bg-gray-50 hover:bg-nalo-pink',
	[Variant.HOLLOW]: 'bg-white text-gray-500 hover:bg-gray-50',
}

type PButton = {
	variant?: Variant
	size?: Size
	weight?: Weight
}

const Button = <T extends ElementType = 'button'>({
	as,
	children,
	variant = Variant.PRIMARY,
	size = Size.NORMAL,
	weight = Weight.NORMAL,
	className,
	...props
}: IPolymorphicComponent<T, PButton>) => {
	const Component = as || 'button'

	return (
		<Component
			className={CNM(
				`group inline-flex items-center gap-1.5 justify-center
				transition-all duration-200 rounded-md
                disabled:pointer-events-none disabled:opacity-50`,
				VARIANT_MAPS[variant],
				SIZE_MAPS[size],
				WEIGHT_MAPS[weight],
				className ?? '',
			)}
			{...props}
		>
			{children}
		</Component>
	)
}

Button.variant = Variant
Button.size = Size
Button.weight = Weight

export { Button }
