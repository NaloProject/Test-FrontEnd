import cs from "clsx"
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { Loader } from "../../misc/Loader"
import styles from "./Button.module.css"

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  secondary?: boolean
  fullwidth?: boolean
  loading?: boolean
}

export function Button({
  className,
  secondary = false,
  fullwidth = false,
  loading = false,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cs(
        styles.root,
        {
          [styles.secondary]: secondary,
          [styles.fullwidth]: fullwidth,
          [styles.loading]: loading,
        },
        className
      )}
    >
      {loading ? <Loader className={styles.loader} /> : children}
    </button>
  )
}
