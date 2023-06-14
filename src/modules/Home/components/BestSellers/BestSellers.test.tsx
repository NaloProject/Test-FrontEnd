import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { BestSellers } from "."

jest.mock("../../../Seller/lib", () => ({
  useBestSellers() {
    return [
      {
        name: "Richard Noga",
        id: 2323,
        isVerified: true,
        avatar: "/assets/images/sellers/richard-noga.jpeg",
      },
    ]
  },
  useSellerWalletAmount() {
    return 100
  },
}))

describe("Home module > BestSellers", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <BestSellers />
        </BrowserRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
