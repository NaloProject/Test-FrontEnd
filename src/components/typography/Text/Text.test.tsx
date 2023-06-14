import renderer from "react-test-renderer"
import { Text } from "."

describe("Components > Text", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <div>
          <Text>Lorem ipsum</Text>
          <Text secondary>Lorem ipsum</Text>
          <Text italic>Lorem ipsum</Text>
          <Text underlined>Lorem ipsum</Text>
          <Text uppercased>Lorem ipsum</Text>
          <Text medium>Lorem ipsum</Text>
          <Text semibold>Lorem ipsum</Text>
          <Text bold>Lorem ipsum</Text>
          <Text heavy>Lorem ipsum</Text>
          <Text black>Lorem ipsum</Text>
        </div>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
