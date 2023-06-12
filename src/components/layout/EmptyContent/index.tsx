import { ComponentProps, ReactNode } from "react"
import styles from "./EmptyContent.module.css"

interface Props {
  icon?(
    props: ComponentProps<"svg"> & {
      title?: string
      titleId?: string
    }
  ): JSX.Element
  children?: ReactNode | ReactNode[]
}

export function EmptyContent({ icon: Icon, children }: Props) {
  return (
    <div className={styles.root}>
      {Icon && <Icon className={styles.icon} />}
      {children && <div className={styles.content}>{children}</div>}
    </div>
  )
}
