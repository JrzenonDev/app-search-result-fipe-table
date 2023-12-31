import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledSearchButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: 10px 50px;
  text-transform: capitalize;
  border-radius: 3px;
  color: #a9a7af;
`;
