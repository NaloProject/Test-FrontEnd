import styled from"styled-components";

const grey = "#A9A9A9";

const StyledBestSellers = styled.div`
  //background-color: #eef1f0;
  margin: 0 auto;
  width: 80%;
  padding-top: 40px;

  .title {
    font-size: 25px;
    font-weight: 700;
  }

  .sub-title {
    color: ${grey};
    font-size: 13px;
    margin-bottom: 20px;
    font-weight: 300;
  }

  .sellers-container {
    user-select: none;
    display: flex;
    flex-wrap: wrap;
    @media(max-width: 787px) {
      justify-content: center;
    }
    a {
      color: inherit;
      text-decoration: inherit;
    }

    .seller-item {
      display: flex;
      //border: 1px solid red;
      width: 230px;
      align-items: center;
      margin: 10px;
      border: 1px solid white;
      border-radius: 5px;
      transition: box-shadow 0.3s;
      &:hover {
        box-shadow: 0 1px 5px 1px rgba(100, 100, 100, 0.3);;
      }

      .index {
        color: ${grey};
        margin-right: 15px;
        font-size: 12px;
      }
      //
      // .avatar {
      //   border-radius: 50%;
      //   overflow: hidden;
      //   width: 50px;
      //   height: 50px;
      //   margin-right: 15px;
      // }
      //
      // .short-infos {
      //   font-size: 12px;
      //   font-weight: 700;
      //
      //   .name {
      //     display: inline-block;
      //     margin-right: 5px;
      //   }
      //
      //   .sum {
      //     color: ${grey};
      //   }
      }
    }
  }
`;

export default StyledBestSellers;

