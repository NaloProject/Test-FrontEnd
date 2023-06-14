import renderer from "react-test-renderer"
import { Title } from "."

describe("Home module > Title", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Title>Lorem ipsum</Title>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
