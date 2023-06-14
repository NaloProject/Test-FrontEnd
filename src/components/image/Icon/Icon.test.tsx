import { AcademicCapIcon } from "@heroicons/react/24/outline"
import renderer from "react-test-renderer"
import { Icon } from "."

describe("Components > Icon", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Icon icon={AcademicCapIcon} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
