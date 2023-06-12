import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import { ReactNode } from "react"
import { Link, useNavigate } from "react-router-dom"
import styles from "./Back.module.css"

interface Props {
  to?: string
  children?: ReactNode | ReactNode[]
}

export function Back({ to, children }: Props) {
  const navigate = useNavigate()

  function goBack() {
    navigate(to ?? (-1 as unknown as string))
  }

  return (
    <Link to={to ?? ""} className={styles.root} onClick={goBack}>
      <ArrowLeftIcon className={styles.icon} />
      <span className={styles.label}>{children ?? "Retour"}</span>
    </Link>
  )
}
