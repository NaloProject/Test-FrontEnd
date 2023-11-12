import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockData from "../data.json";
import { urls } from "../config/urls";
import NftsDetailsPage from "../pages/live-auctions/[id]";
import { LiveAuctionItem } from "../components/Live-Auctions/LiveAuctionItem";

describe("LiveAuctionItem", () => {
  const itemId = '1';
  let itemData;

  beforeEach(() => {
    itemData = mockData.nfts.find((item) => item.id === itemId);
    expect(itemData).toBeDefined();
  });

  it("renders with data from a specific ID", () => {
    render(<LiveAuctionItem {...itemData} />);
    const nameElement = screen.getByText(itemData.name);
    expect(nameElement).toBeInTheDocument();
  });

  it("navigates to the item's detail page on click", () => {
    render(<LiveAuctionItem {...itemData} />);
    const linkElement = screen.getByTestId(`link-${itemData.id}`);
    userEvent.click(linkElement);
    expect(linkElement).toHaveAttribute("href", `${urls.liveAuctions}/${itemData.id}`);
  });
});

describe("LiveAuctions Details Page", () => {
  it("renders with dynamic data", () => {
    const itemId = '3';
    const nftData = mockData.nfts.find((nft) => nft.id === itemId);
    const sellerData = mockData.bestSellers.find((seller) => seller.id === nftData?.sellerId);
    
    expect(nftData).toBeDefined();
    expect(sellerData).toBeDefined();

    render(<NftsDetailsPage sellerData={sellerData} nftsData={nftData} />);
    const nameElement = screen.getByText(nftData.name);
    const sellerNameElement = screen.getByText(sellerData.name);
    const avatarElement = screen.getByAltText(`${nftData.name}`);

    expect(nameElement).toBeInTheDocument();
    expect(sellerNameElement).toBeInTheDocument();
    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute("src", nftData.image);
  });
});
