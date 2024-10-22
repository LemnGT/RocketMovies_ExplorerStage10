import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 274px;
  background-color: ${({ theme }) => theme.COLORS.BG_LIGHT};
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LABEL_GRAY};
  }
  color: ${({ theme }) => theme.COLORS.FONT_WHITE};

  border: none;
  resize: none;
  border-radius: 10px;
  padding: 10px 16px;
`;
