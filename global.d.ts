export {}

declare global {
  export type LazyIconProps = PropsWithRef<SVGProps<SVGSVGElement>>

  export type LazyIcon = FC<LazyIconProps>
}

declare module '*.svg' {
  const ReactComponent: FC<SVGProps<SVGSVGElement>>
  export default ReactComponent
}
