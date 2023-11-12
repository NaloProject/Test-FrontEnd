import { NftsData } from "../LiveAuctions";

export interface BestSellerType {
  name: string;
  id: number;
  isVerified?: boolean;
  avatar?: string;
}

export interface BestSellersProps {
  data: BestSellerType[];
}

export interface BestSellerDetailsPageProps {
  bestSellerData: BestSellerType;
  nfts: NftsData[];
}
