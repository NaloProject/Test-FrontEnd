import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockData from "../data.json";
import { urls } from "../config/urls";
import BestSellerCard from "../components/Best-Sellers/BestSellerCard";
import BestSellerDetailsPage from "../pages/best-sellers/[id]";

describe("BestSellerCard", () => {
  const itemId = 4984;
  let itemData;

  beforeEach(() => {
    itemData = mockData.bestSellers.find((item) => item.id === itemId);
    expect(itemData).toBeDefined();
    render(<BestSellerCard {...itemData} />);
  });

  it("renders correctly with the given data", () => {
    expect(screen.getByText(itemData.name)).toBeInTheDocument();
  });

  it("navigates to the detail page when clicked", () => {
    const linkElement = screen.getByTestId(`link-${itemData.id}`);
    userEvent.click(linkElement);
    expect(linkElement).toHaveAttribute("href", `${urls.bestSellers}/${itemData.id}`);
  });
});

describe("BestSellerDetailsPage", () => {
  const itemId = 4984;
  let itemData, nftsData;

  beforeEach(() => {
    itemData = mockData.bestSellers.find((item) => item.id === itemId);
    nftsData = mockData.nfts.filter((nft) => nft.sellerId === itemId);
    render(<BestSellerDetailsPage bestSellerData={itemData} nfts={nftsData} />);
  });

  it("renders the seller details correctly", () => {
    expect(screen.getByText(itemData.name)).toBeInTheDocument();
    const avatarElement = screen.getByAltText(`${itemData.name}`);
    expect(avatarElement).toHaveAttribute("src", itemData.avatar);
  });

  it("displays all associated NFTs", () => {
    nftsData.forEach((nft) => {
      expect(screen.getByTestId(`nft-${nft.id}`)).toBeInTheDocument();
    });
  });
});
