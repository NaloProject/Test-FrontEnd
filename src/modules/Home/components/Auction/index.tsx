import { useNavigate } from "react-router-dom"
import { NFT } from "../../../NFT/types"

interface Props {
  nft: NFT
}

export function Auction({ nft }: Props) {
  const navigate = useNavigate()

  function navigateToNFT() {
    navigate(`/nfts/${nft.id}`)
  }

  return <div onClick={navigateToNFT}>{nft.name}</div>
}
