import { Text, TextProps } from "../../typography/Text"

interface Props extends TextProps {
  amount: number | string
}

export function Price({ amount, ...props }: Props) {
  return (
    <Text {...props}>{parseInt(amount.toString(), 10).toFixed(2)} ETH</Text>
  )
}
