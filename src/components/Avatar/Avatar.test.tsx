import { renderWithRedux } from '@Utils/reduxRenderer'
import Avatar from './Avatar'

const IMG_URL =
  'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg'

describe('Avatar', () => {
  it('should mount first', async () => {
    const { container } = renderWithRedux(
      <Avatar alt="test" size={32} src={IMG_URL} />
    )

    expect(container).toMatchSnapshot()
  })
})
