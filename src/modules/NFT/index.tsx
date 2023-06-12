import { useNavigate, useParams } from "react-router-dom"
import { Content } from "../../components/layout/Content"
import { Page } from "../../components/layout/Page"
import { Back } from "../../components/navigation/Back"
import { Likes } from "../../components/product/Likes"
import { Price } from "../../components/product/Price"
import { TimeLeft } from "../../components/product/TimeLeft"
import { Text } from "../../components/typography/Text"
import { SellerAvatar } from "../Seller/components/SellerAvatar"
import { useSeller } from "../Seller/lib"
import styles from "./NFT.module.css"
import { useNFT } from "./lib"

export default function NFT() {
  const { id: nftId } = useParams()
  const nft = useNFT(nftId)
  const seller = useSeller(nft?.sellerId)
  const navigate = useNavigate()

  function navigateToSeller() {
    if (seller) {
      navigate(`/sellers/${seller.id}`)
    }
  }

  if (!nft) {
    navigate("/")

    return null
  }

  return (
    <Page>
      <Content small>
        <Back to="/">Home</Back>

        <section className={styles.root}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${nft.image})` }}
          >
            <TimeLeft timeLeft={nft.timeLeft} className={styles.timeLeft} />
          </div>

          <div className={styles.details}>
            <div className={styles.header}>
              <div className={styles.nameContainer}>
                <h1 className={styles.name}>{nft.name}</h1>

                {nft.isHot && <Text className={styles.hot}>Hot 🔥</Text>}
              </div>
              <div className={styles.pricing}>
                <Price amount={nft.price} className={styles.price} />
                <Text className={styles.forSale}>{nft.forSale} for sale</Text>
              </div>
            </div>

            {seller && (
              <div className={styles.seller} onClick={navigateToSeller}>
                <SellerAvatar seller={seller} showWalletAmount />
              </div>
            )}

            <div className={styles.footerWrapper}>
              <div className={styles.footer}>
                <Text secondary className={styles.minted}>
                  {nft.totalMinted} editions minted
                </Text>
                <Likes count={nft.like} big />
              </div>
            </div>
          </div>
        </section>
      </Content>
    </Page>
  )
}
