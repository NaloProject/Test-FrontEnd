import { setBestSellers, setNFTs } from "../actions"
import reducer, { initialState } from "../reducer"

const bestSellers = [
  {
    name: "Richard Noga",
    id: 2323,
    isVerified: true,
    avatar: "/assets/images/sellers/richard-noga.jpeg",
  },
]

const nfts = [
  {
    id: "4",
    name: "Ceres Searching",
    totalMinted: 2,
    price: "10.89",
    like: 400,
    forSale: 1,
    timeLeft: "2 days",
    isHot: true,
    sellerId: 2323,
    image: "/assets/images/nfts/ceres-searching.jpeg",
  },
]

describe("Store > reducer", () => {
  it("should correctly handle set nfts action", () => {
    const state = reducer(initialState, setNFTs(nfts))

    expect(state).toEqual({
      bestSellers: [],
      nfts,
    })
  })

  it("should correctly handle set best sellers action", () => {
    const state = reducer(initialState, setBestSellers(bestSellers))

    expect(state).toEqual({
      bestSellers,
      nfts: [],
    })
  })
})
