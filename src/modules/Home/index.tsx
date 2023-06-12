import { useNavigate } from "react-router-dom"
import { Content } from "../../components/layout/Content"
import { Page } from "../../components/layout/Page"
import { Paragraph } from "../../components/typography/Paragraph"
import { Text } from "../../components/typography/Text"
import styles from "./Home.module.css"

export default function Home() {
  const navigate = useNavigate()

  function navigateToSeller(id: string) {
    navigate(`/sellers/${id}`)
  }

  return (
    <Page>
      <Content className={styles.header}>
        <Paragraph className={styles.presentation}>
          <Text>
            Le style &agrave; son importance, nous le savons et vous aussi.
          </Text>
          <br />
          <Text>
            Le soucis du d&eacute;tail n&apos;est pas une futilit&eacute;,
            c&apos;est une n&eacute;cessit&eacute;.
          </Text>
          <br />
          <Text>
            Chez the Fkees nous avons ce go&ucirc;t du travail bien fait.
          </Text>
          <br />
          <Text>Nous voulons le meilleur, &agrave; tous points de vue.</Text>
        </Paragraph>
      </Content>
    </Page>
  )
}
