import cs from "clsx"
import { ReactNode } from "react"
import styles from "./Content.module.css"

interface Props {
  className?: string
  fullwidth?: boolean
  small?: boolean
  noVerticalSpacing?: boolean
  noHorizontalSpacingOnMobile?: boolean
  noHorizontalSpacingOnTablet?: boolean
  children?: ReactNode | ReactNode[]
}

export function Content({
  className,
  fullwidth = false,
  small = false,
  noVerticalSpacing = false,
  noHorizontalSpacingOnMobile = false,
  noHorizontalSpacingOnTablet = false,
  children,
}: Props) {
  return (
    <div
      className={cs(
        styles.root,
        {
          [styles.fullwidth]: fullwidth,
          [styles.small]: small,
          [styles.noVerticalSpacing]: noVerticalSpacing,
          [styles.noHorizontalSpacingOnMobile]: noHorizontalSpacingOnMobile,
          [styles.noHorizontalSpacingOnTablet]: noHorizontalSpacingOnTablet,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
