import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { Page } from "."

describe("Components > Page", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Page />
        </BrowserRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
