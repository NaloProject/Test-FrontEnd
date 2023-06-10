import { renderWithRedux } from '@Utils/reduxRenderer'
import DynamicIcon from './DynamicIcon'

describe('DynamicIcon', () => {
  it('should mount first', async () => {
    const { container } = renderWithRedux(<DynamicIcon size={32} name="moon" />)

    expect(container).toMatchSnapshot()
  })
})
