import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.FONT_WHITE};

  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 400;

  &:disabled {
    opacity: 0.5;
  }
`;
