import cs from "clsx"
import { isValidElement, ReactNode } from "react"
import { Link } from "react-router-dom"
import { Text } from "../../typography/Text"
import styles from "./Message.module.css"

interface Props {
  action?: ReactNode | ReactNode[]
  className?: string
  success?: boolean
  warning?: boolean
  error?: boolean
  info?: boolean
  link?: string
  linkLabel?: string
  children?: ReactNode | ReactNode[]
}

export function Message({
  action,
  className,
  success = false,
  warning = false,
  error = false,
  info = false,
  link,
  linkLabel,
  children,
}: Props) {
  return (
    <div
      className={cs(
        styles.root,
        {
          [styles.success]: success,
          [styles.warning]: warning,
          [styles.error]: error,
          [styles.info]: info,
        },
        className
      )}
    >
      <div className={styles.content}>
        <Text>
          {children}
          {link && linkLabel && (
            <Text>
              {" "}
              <Link to={link} className={styles.link}>
                {linkLabel}
              </Link>
            </Text>
          )}
        </Text>
      </div>
      {isValidElement(action) && (
        <div className={styles.actionIconContainer}>{action}</div>
      )}
    </div>
  )
}
