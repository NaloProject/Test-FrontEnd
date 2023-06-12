import { useNavigate } from "react-router-dom"
import { Content } from "../../components/layout/Content"
import { Page } from "../../components/layout/Page"

export default function Home() {
  const navigate = useNavigate()

  function navigateToSeller(id: string) {
    navigate(`/sellers/${id}`)
  }

  return (
    <Page>
      <Content>Hello buddies!</Content>
    </Page>
  )
}
