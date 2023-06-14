import { useNFT, useNFTs, useNFTsBySeller } from ".."

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

jest.mock("../../../../store", () => ({
  useStore() {
    return {
      state: { bestSellers, nfts },
      dispatch: jest.fn(),
    }
  },
}))

describe("NFT module > lib", () => {
  describe("#useNFTs", () => {
    it("should correctly gets nfts", () => {
      expect(useNFTs()).toEqual(nfts)
    })
  })

  describe("#useNFT", () => {
    it("should correctly gets nft", () => {
      expect(useNFT(nfts[0].id)).toEqual(nfts[0])
    })
  })

  describe("#useNFTsBySeller", () => {
    it("should correctly get nfts by a given seller", () => {
      expect(useNFTsBySeller(bestSellers[0].id)).toEqual([nfts[0]])
    })
  })
})
