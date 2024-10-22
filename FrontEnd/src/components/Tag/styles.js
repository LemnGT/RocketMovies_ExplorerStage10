import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.COLORS.FONT_WHITE};
  border-radius: 8px;
  margin-right: 6px;
  background-color: ${({ theme }) => theme.COLORS.BG_MARCADOR};
`;
