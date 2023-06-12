import cs from "clsx"
import { MouseEvent } from "react"
import styles from "./Icon.module.css"

interface Props {
  icon: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
  className?: string
  onClick?(event: MouseEvent<SVGSVGElement>): void
}

export function Icon({ icon: InnerIcon, className, onClick }: Props) {
  return <InnerIcon className={cs(styles.root, className)} onClick={onClick} />
}
