import styled from 'styled-components';

const borderGrey = "#e5e5e5";
const lightGrey = "#a9a9a9";

const StyledCard = styled.div`
  width: 220px;
  height: 320px;
  background-color: white;
  border: 1px solid ${borderGrey};
  border-radius: 10px;
  margin-bottom: 20px;
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s;
  
  &:hover {
    box-shadow: 0 1px 10px 1px rgba(100, 100, 100, 0.6);;
  }

  .image-wrapper {
    width: 150px;
    height: 120px;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 10px;
    position: relative;
    .time-remaining {
      font-size: 10px;
      border-radius: 3px;
      padding: 3px;
      background-color: white;
      bottom: 15px;
      left: 15px;
      position: absolute;
    }
  }

  .header {
    margin-top: 10px;
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 150px;

    .nft-name {
      font-size: 12px;
      font-weight: 700;
      width: 85px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .nft-forsale {
      font-size: 13px;
      font-weight: 700;
      color: #03ce65;
    }
  }
  
  .minted {
    width: 150px;
    font-size: 11px;
    color: ${lightGrey};
    margin-top: 5px;
    text-align: left;
  }
  
  .seller {
    margin-top: 15px;
    margin-bottom: 15px;
    width: 150px;
  }
  
  .delimiter {
    width: 100%;
    border-bottom: 1px solid ${borderGrey};
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
    width: 150px;
    margin-top: 20px;
    .bid {
      .price {
        font-size: 0.9rem;
        font-weight: 700;
      }
      .label {
        font-size: 0.8rem;
        color: ${lightGrey};
      }
    }
    .likes {
      display: flex;
      align-items: center;
      .like-number {
        font-size: 0.7rem;
        color: ${lightGrey};
        margin-right: 5px;
      }
      .heart {
      }
    }
  }
`;


export default StyledCard;
