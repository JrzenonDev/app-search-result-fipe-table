import { styled } from "@mui/material/styles";

export const StyledSection = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #424242;

  h1 {
    font-size: 40px;
  }
  p {
    font-size: 28px;
    margin-top: ${({ theme }) => theme.spacing(1)};
  }
`;

export const StyledFormContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  max-width: 100%;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 550px;
    max-width: 100%;
    background: #fff;
    margin-top: ${({ theme }) => theme.spacing(3)};
    padding: 2rem 0;
    border-radius: 3px;
    box-shadow: 0 4px 10px -4px rgba(0, 0, 0, 0.5);
  }
`;
