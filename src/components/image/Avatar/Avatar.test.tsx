import renderer from "react-test-renderer"
import { Avatar } from "."

describe("Components > Avatar", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <div>
          <Avatar url="/assets/images/nfts/pickchu.jpeg" />
          <Avatar url="/assets/images/nfts/pickchu.jpeg" verified />
          <Avatar url="/assets/images/nfts/pickchu.jpeg" big />
        </div>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
