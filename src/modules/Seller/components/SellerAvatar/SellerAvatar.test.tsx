import renderer from "react-test-renderer"
import { SellerAvatar } from "."

const seller = {
  name: "Richard Noga",
  id: 2323,
  isVerified: true,
  avatar: "/assets/images/sellers/richard-noga.jpeg",
}

describe("Seller module > SellerAvatar", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<SellerAvatar seller={seller} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it("should match snapshot with wallet amount", () => {
    const tree = renderer
      .create(<SellerAvatar seller={seller} showWalletAmount />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
