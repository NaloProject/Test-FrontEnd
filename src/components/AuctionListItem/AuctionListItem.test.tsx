import { renderWithRedux } from '@Utils/reduxRenderer'
import { auctionLisItemStub } from './AuctionListItem.stub'
import AuctionListItem from './AuctionListItem'

describe('AuctionListItem', () => {
  it('should mount first', async () => {
    const { container } = renderWithRedux(
      <AuctionListItem auction={auctionLisItemStub} />
    )

    expect(container).toMatchSnapshot()
  })
})
