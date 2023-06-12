import { useNavigate, useParams } from "react-router-dom"
import { Page } from "../../components/layout/Page"
import { Back } from "../../components/navigation/Back"
import { useSeller } from "../Seller/lib"
import { useNFT } from "./lib"

export default function NFT() {
  const { id: nftId } = useParams()
  const nft = useNFT(nftId)
  const seller = useSeller(nft?.sellerId)
  const navigate = useNavigate()

  if (!nft) {
    navigate("/")

    return null
  }

  return (
    <Page>
      <Back to="/">Home</Back>

      <div>
        <img src={nft.image} />
        <br />
        <span>{nft.name}</span>
        <br />
        {nft.forSale && <span>For sale</span>}
        <br />
        {nft.isHot && <span>Hot</span>}
        <br />
        <span>{nft.price}$</span>
        <br />
        <span>Minted {nft.totalMinted} times</span>
        <br />
        <span>{nft.timeLeft} left</span>
        <br />
        <span>{nft.like} likes</span>
        <br />

        {seller && (
          <div>
            <span>
              selled by <img src={seller.avatar} alt="" />
              <span>{seller.name}</span>
            </span>
          </div>
        )}
      </div>
    </Page>
  )
}
