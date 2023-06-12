import { Loader } from "../../misc/Loader"
import { Page } from "../Page"
import styles from "./PageLoader.module.css"

export function PageLoader() {
  return (
    <Page>
      <Loader className={styles.loader} />
    </Page>
  )
}
