import styled from "styled-components";

export const Container = styled.button`
  border: none;
  padding: 32px;
  margin-top: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.PINK_LIGHT};
  h2 {
    font-weight: bold;
    text-align: left;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.FONT_WHITE};
  }

  section {
    text-align: left;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    height: 12px;
    width: 12px;
    margin-right: 6px;
    margin-top: 8px;
    margin-bottom: 15px;
  }

  p {
    text-align: left;
    overflow-y: scroll;
    height: 53px;
    color: ${({ theme }) => theme.COLORS.LABEL_GRAY};
    margin-bottom: 20px;
  }
  footer {
    text-align: left;
  }
`;
