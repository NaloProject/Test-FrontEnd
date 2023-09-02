import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'

type TAsProp<C extends ElementType> = {
	as?: C
}

type TPropsToOmit<C extends ElementType, P> = keyof (TAsProp<C> & P)

export type IPolymorphicComponent<
	C extends ElementType,
	Props = object,
> = PropsWithChildren<Props & TAsProp<C>> &
	Omit<ComponentPropsWithoutRef<C>, TPropsToOmit<C, Props>>
