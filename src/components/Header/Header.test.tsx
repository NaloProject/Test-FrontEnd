import { renderWithRedux } from '@Utils/reduxRenderer'
import Header from './Header'

describe('Header', () => {
  it('should mount first', async () => {
    const { container } = renderWithRedux(
      <Header title="title" iconName="flame" subTitle="sub title" />
    )

    expect(container).toMatchSnapshot()
  })

  it('should render even if the icon is not found', async () => {
    const { container } = renderWithRedux(
      <Header title="title" iconName="wrongName" subTitle="sub title" />
    )

    expect(container).toMatchSnapshot()
  })
})
