import StyledAppContainer from './StyledAppContainer';
import Data from "../../assets/data/data.json";
import BestSellers from "../bestsellers/BestSellers";
import NFTs from "../nfts/NFTs";

const AppContainer = () => (
    <StyledAppContainer>
      <BestSellers
        bestsellers={Data.bestSellers}
        nfts={Data.nfts}
      />
      <NFTs
        bestsellers={Data.bestSellers}
        nfts={Data.nfts}
      />
    </StyledAppContainer>
  );

export default  AppContainer;
