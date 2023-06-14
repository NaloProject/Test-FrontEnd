import renderer from "react-test-renderer"
import { SlideshowButton } from "."

const onClick = jest.fn()

describe("Home module > SlideshowButton", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <div>
          <SlideshowButton onClick={onClick} />
          <SlideshowButton previous onClick={onClick} />
        </div>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
