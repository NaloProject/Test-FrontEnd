import cs from "clsx"
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react"
import styles from "./Text.module.css"

export interface TextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  className?: string
  secondary?: boolean
  italic?: boolean
  underlined?: boolean
  uppercased?: boolean
  medium?: boolean
  semibold?: boolean
  bold?: boolean
  heavy?: boolean
  black?: boolean
  children?: ReactNode | ReactNode[]
}

export function Text({
  className,
  secondary,
  italic,
  underlined,
  uppercased,
  medium,
  semibold,
  bold,
  heavy,
  black,
  children,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={cs(
        styles.root,
        {
          [styles.secondary]: secondary,
          [styles.italic]: italic,
          [styles.underlined]: underlined,
          [styles.uppercased]: uppercased,
          [styles.medium]: medium,
          [styles.semibold]: semibold,
          [styles.bold]: bold,
          [styles.heavy]: heavy,
          [styles.black]: black,
        },
        className
      )}
    >
      {children}
    </span>
  )
}
