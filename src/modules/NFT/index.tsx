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
      <Content>
        <Back to="/">Home</Back>

        <section className={styles.root}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${nft.image})` }}
          >
            <TimeLeft timeLeft={nft.timeLeft} className={styles.timeLeft} />
          </div>

          <div className={styles.details}>
            <div className={styles.nameContainer}>
              <h1 className={styles.name}>{nft.name}</h1>
              {nft.isHot && (
                <div className={styles.hot}>
                  <Text>Hot 🔥</Text>
                </div>
              )}
            </div>

            <div>
              <Price amount={nft.price} className={styles.price} />
              <br />
              <Text className={styles.forSale}>{nft.forSale} for sale</Text>
              <br />
              <Text secondary className={styles.minted}>
                {nft.totalMinted} editions minted
              </Text>
            </div>

            <div className={styles.footerWrapper}>
              <div className={styles.footer}>
                <Likes count={nft.like} big />
                {seller && (
                  <div className={styles.sellerWrapper}>
                    <Text>Selled by</Text>
                    <div className={styles.seller} onClick={navigateToSeller}>
                      <SellerAvatar seller={seller} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </Content>
    </Page>
  )
}
