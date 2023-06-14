import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import { Message } from "."

describe("Components > Message", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Message>Lorem ipsum</Message>
          <Message error>Lorem ipsum</Message>
          <Message warning>Lorem ipsum</Message>
          <Message info>Lorem ipsum</Message>
          <Message success>Lorem ipsum</Message>
          <Message action={<span>Action</span>}>Lorem ipsum</Message>
          <Message link="/" linkLabel="Back home">
            Lorem ipsum
          </Message>
        </BrowserRouter>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
