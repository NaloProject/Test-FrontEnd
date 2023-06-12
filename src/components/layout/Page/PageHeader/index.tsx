import cs from "clsx"
import { ReactNode } from "react"
import { HeadingDisplay } from "../../../../lib/typography"
import { Heading } from "../../../typography/Heading"
import styles from "./PageHeader.module.css"

interface Props {
  back?: ReactNode | ReactNode[]
  headingClassName?: string
  children?: ReactNode | ReactNode[]
}

export function PageHeader({ back, headingClassName, children }: Props) {
  return (
    <div className={styles.root}>
      {back && <div className={styles.back}>{back}</div>}
      {children && (
        <Heading
          display={HeadingDisplay.heading2}
          className={cs(
            styles.heading,
            { [styles.centered]: !!back },
            headingClassName
          )}
          semibold
        >
          {children}
        </Heading>
      )}
    </div>
  )
}
