import { Content } from "../../components/layout/Content"
import { Page } from "../../components/layout/Page"
import styles from "./Home.module.css"
import { Auctions } from "./components/Auctions"
import { BestSellers } from "./components/BestSellers"

export default function Home() {
  return (
    <Page>
      <Content className={styles.root}>
        <section>
          <h1 className={styles.title}>best sellers</h1>
          <h2 className={styles.subtitle}>Best seller of this week's NFTs</h2>
          <div className={styles.bestSellers}>
            <BestSellers />
          </div>
        </section>

        <section>
          <h1 className={styles.title}>live auctions</h1>
          <h2 className={styles.subtitle}>Enjoy! The latest hot auctions</h2>
          <div className={styles.auctions}>
            <Auctions />
          </div>
        </section>
      </Content>
    </Page>
  )
}
