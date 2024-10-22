import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BG_LIGHT};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LABEL_GRAY : theme.COLORS.FONT_WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LABEL_GRAY}` : "none"};

  border-radius: 10px;
  padding: 0 16px;

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > button {
    border: none;
    background: none;
  }

  > input {
    height: 56px;
    width: 100%;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.FONT_WHITE};
    border: none;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LABEL_GRAY};
    }
  }
`;
