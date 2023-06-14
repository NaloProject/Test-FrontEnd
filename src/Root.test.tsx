import { render, screen } from "@testing-library/react"
import { Root } from "./Root"

describe("Root", () => {
  it("should renders correctly", () => {
    render(<Root />)

    const main = screen.getByRole("main")

    expect(main).toBeInTheDocument()
  })
})
