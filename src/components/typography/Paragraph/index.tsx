import { DetailedHTMLProps, HTMLAttributes } from "react"

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export function Paragraph(props: Props) {
  return <p {...props}>{props.children}</p>
}
