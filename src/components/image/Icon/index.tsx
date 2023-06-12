import cs from "clsx"
import { FunctionComponent, MouseEvent, SVGProps } from "react"
import styles from "./Icon.module.css"

interface Props {
  icon: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  className?: string
  onClick?(event: MouseEvent<SVGSVGElement>): void
}

export function Icon({ icon: InnerIcon, className, onClick }: Props) {
  return <InnerIcon className={cs(styles.root, className)} onClick={onClick} />
}
