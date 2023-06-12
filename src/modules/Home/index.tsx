import { ArrowPathIcon } from "@heroicons/react/24/outline"
import { Fragment, useEffect } from "react"
import { Message } from "../../components/alert/Message"
import { Icon } from "../../components/image/Icon"
import { Content } from "../../components/layout/Content"
import { Page } from "../../components/layout/Page"
import { PageLoader } from "../../components/layout/PageLoader"
import { Heading } from "../../components/typography/Heading"
import { useFetchData } from "../../lib/api"
import { HeadingDisplay } from "../../lib/typography"
import { useStore } from "../../store"
import { setBestSellers, setNFTs } from "../../store/actions"
import styles from "./Home.module.css"
import { Auctions } from "./components/Auctions"
import { BestSellers } from "./components/BestSellers"

export default function Home() {
  const { dispatch } = useStore()
  const { loading, error, data } = useFetchData()

  useEffect(() => {
    if (data) {
      dispatch(setBestSellers(data.bestSellers))
      dispatch(setNFTs(data.nfts))
    }
  }, [data])

  function reloadPage() {
    window.location.reload()
  }

  return (
    <Page>
      <Content className={styles.root}>
        {loading ? (
          <PageLoader />
        ) : error ? (
          <Message
            action={<Icon icon={ArrowPathIcon} onClick={reloadPage} />}
            error
          >
            Something went wrong while fetching data. Please refresh the page.
          </Message>
        ) : (
          <Fragment>
            <section>
              <Heading
                display={HeadingDisplay.heading1}
                className={styles.title}
              >
                best sellers
              </Heading>
              <Heading
                display={HeadingDisplay.text}
                secondary
                className={styles.subtitle}
              >
                Best seller of this week's NFTs
              </Heading>
              <div className={styles.bestSellers}>
                <BestSellers />
              </div>
            </section>
            <section>
              <Heading
                display={HeadingDisplay.heading1}
                className={styles.title}
              >
                live auctions
              </Heading>
              <Heading
                display={HeadingDisplay.text}
                secondary
                className={styles.subtitle}
              >
                Enjoy! The latest hot auctions
              </Heading>
              <div className={styles.auctions}>
                <Auctions />
              </div>
            </section>
          </Fragment>
        )}
      </Content>
    </Page>
  )
}
