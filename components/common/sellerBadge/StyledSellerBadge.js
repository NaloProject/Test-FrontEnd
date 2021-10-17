import styled from "styled-components";

const grey = "#A9A9A9";

const StyledSellerBadge = styled.div`
  display: flex;
  align-items: center;
  .avatar {
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  .short-infos {
    font-size: 12px;
    font-weight: 700;

    .name {
      display: inline-block;
      margin-right: 5px;
    }

    .sum {
      color: ${grey};
    }
  }
`;

export default StyledSellerBadge;
