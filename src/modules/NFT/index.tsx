import { useNavigate, useParams } from "react-router-dom"
import { Content } from "../../components/layout/Content"
import { Page } from "../../components/layout/Page"
import { Back } from "../../components/navigation/Back"
import styles from "./NFT.module.css"
import { Cover } from "./components/Cover"
import { Details } from "./components/Details"
import { useNFT } from "./lib"

export default function NFT() {
  const { id: nftId } = useParams()
  const nft = useNFT(nftId)
  const navigate = useNavigate()

  if (!nft) {
    navigate("/")

    return null
  }

  return (
    <Page>
      <Content small>
        <Back to="/">Home</Back>

        <section className={styles.root}>
          <Cover nft={nft} />
          <Details nft={nft} />
        </section>
      </Content>
    </Page>
  )
}
