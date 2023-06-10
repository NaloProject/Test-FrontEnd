import { renderWithRedux } from '@Utils/reduxRenderer'
import Auctions from './Auctions'

describe('Auctions', () => {
  it('should mount first', async () => {
    const { container } = renderWithRedux(<Auctions />)

    expect(container).toMatchSnapshot()
  })
})
