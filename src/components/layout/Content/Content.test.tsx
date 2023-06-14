import renderer from "react-test-renderer"
import { Content } from "."

describe("Components > Content", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <div>
          <Content />
          <Content small />
          <Content fullwidth />
          <Content noHorizontalSpacingOnMobile />
          <Content noHorizontalSpacingOnTablet />
          <Content noVerticalSpacing />
        </div>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
