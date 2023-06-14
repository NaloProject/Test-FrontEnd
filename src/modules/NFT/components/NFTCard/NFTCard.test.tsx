import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { NFTCard } from "."

const nft = {
  id: "1",
  name: "Origins Sculpture",
  totalMinted: 8,
  price: "2.78",
  like: 195,
  forSale: 3,
  timeLeft: "22 hours",
  isHot: true,
  sellerId: 4321,
  image: "/assets/images/nfts/origin-sculpture.jpeg",
}

const seller = {
  name: "Richard Noga",
  id: 2323,
  isVerified: true,
  avatar: "/assets/images/sellers/richard-noga.jpeg",
}

jest.mock("../../../Seller/lib", () => ({
  useSeller: jest.fn(() => seller),
}))

describe("NFT module > NFTCard", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <NFTCard nft={nft} />
        </BrowserRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
