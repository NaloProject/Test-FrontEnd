import { FunctionComponent, PropsWithChildren } from 'react'

declare global {
	type FC<P = {}> = FunctionComponent<P>
	type FCC<P = {}> = FC<PropsWithChildren<P>>
}
