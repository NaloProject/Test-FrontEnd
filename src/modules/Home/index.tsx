import { Content } from "../../components/layout/Content"
import { Page } from "../../components/layout/Page"
import styles from "./Home.module.css"
import { Auctions } from "./components/Auctions"
import { BestSellers } from "./components/BestSellers"

export default function Home() {
  return (
    <Page>
      <Content className={styles.root}>
        <BestSellers />
        <Auctions />
      </Content>
    </Page>
  )
}
