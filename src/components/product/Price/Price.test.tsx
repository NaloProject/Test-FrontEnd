import renderer from "react-test-renderer"
import { Price } from "."

describe("Components > Price", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Price amount={10} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
