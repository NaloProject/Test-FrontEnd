import styled from "styled-components";

const StyledHomeLink = styled.div`
  font-size: 13px;
  margin: 5px;
  padding: 5px;
  border: 2px solid orange;
  font-family: "Roboto", sans-serif;
  transition: background-color 0.2s;
  border-radius: 5px;
  width: 80px;
  height: 20px;
  text-align: center;

  a {
    color: inherit;
    text-decoration: inherit;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: orange;
  }
`;

export default StyledHomeLink;
