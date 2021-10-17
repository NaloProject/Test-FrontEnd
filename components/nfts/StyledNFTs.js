import styled, { css } from "styled-components";

const grey = "#A9A9A9";

const navHelper = css`
  margin: 5px;
  width: 20px;
  height: 20px;
  text-align: center;

  &.active {
    &:hover {
      background-color: #d3d3d3;
      border-radius: 50%;
      width: 20px;
      height: 20px;
    }
  }

  &.inactive {
    color: ${grey};
    cursor: default;
  }
`;

const StyledNFTs = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  width: 80%;

  .header {
    position: relative;
    margin-bottom: 20px;
    .title {
      font-size: 25px;
      font-weight: 800;
    }

    .sub-title {
      font-size: 13px;
      color: ${grey};
    }
  }

  .nav {
    position: absolute;
    top: 10px;
    right: 0;
    display: flex;
    user-select: none;
    cursor: pointer;
    font-size: 18px;
    @media(max-width: 361px) {
      font-size: 10px;
      top: 30px;
    }

    .left {
      ${navHelper}
    }

    .right {
      ${navHelper}
    }
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    @media(max-width: 787px) {
      justify-content: center;
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }
  }
`;

export default StyledNFTs;
