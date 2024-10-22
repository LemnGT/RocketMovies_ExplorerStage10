import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  align-self: center;
  font-size: 16px;
  display: flex;
  > svg {
    align-self: center;
  }
`;
