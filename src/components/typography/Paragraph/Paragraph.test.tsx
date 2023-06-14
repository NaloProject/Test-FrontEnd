import renderer from "react-test-renderer"
import { Paragraph } from "."

describe("Components > Paragraph", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Paragraph>Lorem ipsum</Paragraph>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
