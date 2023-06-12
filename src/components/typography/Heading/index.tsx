import cs from "clsx"
import { HeadingDisplay } from "../../../lib/typography"
import { Text, TextProps } from "../Text"
import styles from "./Heading.module.css"

export interface HeadingProps extends TextProps {
  display: HeadingDisplay
}

export function Heading({
  className,
  display,
  children,
  ...props
}: HeadingProps) {
  return (
    <Text
      {...props}
      className={cs(
        styles.root,
        {
          [styles.heading1]: display === HeadingDisplay.heading1,
          [styles.heading2]: display === HeadingDisplay.heading2,
          [styles.heading3]: display === HeadingDisplay.heading3,
          [styles.heading4]: display === HeadingDisplay.heading4,
          [styles.text]: display === HeadingDisplay.text,
        },
        className
      )}
    >
      {children}
    </Text>
  )
}
