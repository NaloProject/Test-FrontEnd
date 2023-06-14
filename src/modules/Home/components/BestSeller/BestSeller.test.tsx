import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { BestSeller } from "."

const seller = {
  name: "Richard Noga",
  id: 2323,
  isVerified: true,
  avatar: "/assets/images/sellers/richard-noga.jpeg",
}

describe("Home module > BestSeller", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <BestSeller seller={seller} index={1} />
        </BrowserRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
