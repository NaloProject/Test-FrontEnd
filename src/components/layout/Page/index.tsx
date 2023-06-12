import { m as motion } from "framer-motion"
import { ReactNode } from "react"
import { useLocation } from "react-router-dom"
import styles from "./Page.module.css"

interface Props {
  children?: ReactNode | ReactNode[]
}

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
}

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.2,
}

export function Page({ children }: Props) {
  const { pathname } = useLocation()

  return (
    <motion.main
      key={pathname}
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
      className={styles.root}
    >
      {children}
    </motion.main>
  )
}
