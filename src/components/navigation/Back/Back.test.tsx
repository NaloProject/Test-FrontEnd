import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { Back } from "."

describe("Components > Back", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Back to="/" />
        </BrowserRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
