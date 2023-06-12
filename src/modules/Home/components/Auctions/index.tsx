import { useNavigate } from "react-router-dom"
import { NFTList } from "../../../NFT/components/NFTList"
import { useNFTs } from "../../../NFT/lib"
import { NFT } from "../../../NFT/types"

export function Auctions() {
  const nfts = useNFTs()
  const navigate = useNavigate()

  function navigateToNFT(nft: NFT) {
    navigate(`/nfts/${nft.id}`)
  }

  return <NFTList nfts={nfts} onSelect={navigateToNFT} />
}
