import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"

describe("App", () => {
  it("should renders correctly", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const main = screen.getByRole("main")

    expect(main).toBeInTheDocument()
  })
})
