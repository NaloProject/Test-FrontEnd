import { useNFTs } from "../../../NFT/lib"
import { Auction } from "../Auction"

export function Auctions() {
  const auctions = useNFTs()

  return (
    <div>
      {auctions.map((nft) => (
        <Auction key={nft.id} nft={nft} />
      ))}
    </div>
  )
}
