import renderer from "react-test-renderer"
import { Subtitle } from "."

describe("Home module > Subtitle", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Subtitle>Lorem ipsum</Subtitle>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
