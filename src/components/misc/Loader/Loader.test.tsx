import renderer from "react-test-renderer"
import { Loader } from "."

describe("Components > Loader", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Loader />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
