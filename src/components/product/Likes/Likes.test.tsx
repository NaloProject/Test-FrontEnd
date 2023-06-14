import renderer from "react-test-renderer"
import { Likes } from "."

describe("Components > Likes", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <div>
          <Likes count={10} />
          <Likes count={10} liked />
        </div>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
