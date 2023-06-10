import AuctionCard from '@Components/AuctionCard/AuctionCard'
// import { screen } from '@Utils/reactTestingLibrary'
import { renderWithRedux } from '@Utils/reduxRenderer'
import { auctionCardStub } from './AuctionCard.stub'

describe('AuctionCard', () => {
  it('should mount first', async () => {
    const { container } = renderWithRedux(
      <AuctionCard auction={auctionCardStub} />
    )

    expect(container).toMatchSnapshot()
  })
})
