import { useNavigate, useParams } from "react-router-dom"
import { Content } from "../../components/layout/Content"
import { Page } from "../../components/layout/Page"
import { Back } from "../../components/navigation/Back"
import { Paragraph } from "../../components/typography/Paragraph"
import { Text } from "../../components/typography/Text"
import { NFTList } from "../NFT/components/NFTList"
import { useNFTsBySeller } from "../NFT/lib"
import { NFT } from "../NFT/types"
import styles from "./Seller.module.css"
import { SellerAvatar } from "./components/SellerAvatar"
import { useSeller } from "./lib"

export default function Seller() {
  const { id } = useParams()
  const sellerId = parseInt(id ?? "", 10)
  const seller = useSeller(sellerId)
  const ownedNFTs = useNFTsBySeller(seller?.id)
  const navigate = useNavigate()

  function navigateToNFT(nft: NFT) {
    navigate(`/nfts/${nft.id}`)
  }

  if (!seller) {
    navigate("/")

    return null
  }

  return (
    <Page>
      <Content small>
        <Back to="/">Home</Back>

        <section className={styles.root}>
          <SellerAvatar
            seller={seller}
            showWalletAmount
            big
            className={styles.header}
          />

          {ownedNFTs.length > 0 ? (
            <div>
              <h2>NFTs to sell</h2>
              <NFTList nfts={ownedNFTs} onSelect={navigateToNFT} />
            </div>
          ) : (
            <Paragraph className={styles.noNFTs}>
              <Text secondary>This users has not NFTs to sell actually.</Text>
            </Paragraph>
          )}
        </section>
      </Content>
    </Page>
  )
}
