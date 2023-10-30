import { styled } from "@mui/material/styles";

export const StyledSectionCarPrice = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #424242;
  height: 100vh;
  text-align: center;

  h1 {
    font-size: 40px;
  }
  p {
    font-size: 16px;
    margin-top: 1.5rem;
    color: #777675;
  }

  a {
    color: #777675;
    text-decoration: underline;
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

export const StyledContainerCarPrice = styled("p")`
  background: #00a38c;
  color: #fff !important;
  font-size: 28px !important;
  padding: 12px 28px;
  border-radius: 30px;
`;
