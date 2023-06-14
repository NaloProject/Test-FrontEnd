import { useBestSellers, useSeller, useSellerWalletAmount } from ".."

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

describe("Seller module > lib", () => {
  describe("#useBestSellers", () => {
    it("should correctly gets best sellers", () => {
      expect(useBestSellers()).toEqual(bestSellers)
    })
  })

  describe("#useSeller", () => {
    it("should correctly gets seller", () => {
      expect(useSeller(bestSellers[0].id)).toEqual(bestSellers[0])
    })
  })

  describe("#useSellerWalletAmount", () => {
    it("should correctly compute seller wallet amount", () => {
      expect(useSellerWalletAmount(bestSellers[0])).toEqual(10.89)
    })
  })
})
