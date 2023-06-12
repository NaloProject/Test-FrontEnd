import { useNFTs } from "../../../NFT/lib"
import { Auction } from "../Auction"

export function Auctions() {
  const nfts = useNFTs()

  return (
    <div>
      {nfts.map((nft) => (
        <Auction key={nft.id} nft={nft} />
      ))}
    </div>
  )
}
