import { BestSellerType } from "../BestSellers";

export interface LiveAuctionItem {
  id: string;
  name: string;
  totalMinted: number;
  price: string;
  like: number;
  forSale: number;
  timeLeft: string;
  isHot: boolean;
  sellerId: number;
  image: string;
}

export type LiveAuction = LiveAuctionItem[];

export interface LiveAuctions {
  data: LiveAuction;
}

export interface NftsData {
  id: string;
  name: string;
  image: string;
  price: string;
  timeLeft: string;
  forSale: number;
}

export interface NftsDetailsPageProps {
  sellerData: BestSellerType;
  nftsData: NftsData;
}
