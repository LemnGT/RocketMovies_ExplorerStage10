import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 19px 24px;

  background-color: ${({ theme }) => theme.COLORS.BG_LIGHT};

  height: 18px;
  width: 50%;
  > input {
    border: none;
    height: 18px;
    background: transparent;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LABEL_GRAY};
    }
    color: ${({ theme }) => theme.COLORS.FONT_WHITE};
    width: 100%;
  }

  > svg:first-child {
    margin-top: 1px;
    margin-right: 16px;
    color: ${({ theme }) => theme.COLORS.LABEL_GRAY};
  }
  > svg:last-child {
    margin-top: 1px;
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.LABEL_GRAY};
    font-size: 20px;
  }
`;
