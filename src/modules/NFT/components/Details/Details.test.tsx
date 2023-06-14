import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { Details } from "."

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

describe("NFT module > Details", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Details nft={nft} />
        </BrowserRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
