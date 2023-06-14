import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { PageLoader } from "."

describe("Components > PageLoader", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <PageLoader />
        </BrowserRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
