import renderer from "react-test-renderer"
import { TimeLeft } from "."

describe("Components > TimeLeft", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<TimeLeft timeLeft="10 hours" />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
