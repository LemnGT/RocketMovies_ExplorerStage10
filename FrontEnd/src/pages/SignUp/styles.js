import styled from "styled-components";
import bg from "../../assets/BG.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: row;

  h1 {
    font-weight: bold;
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  p {
    color: ${({ theme }) => theme.COLORS.SUBTITLE_GRAY};
    margin-bottom: 48px;
    font-size: 14px;
    align-self: flex-start;
  }
  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.FONT_WHITE};
    font-weight: 400;
    margin-bottom: 48px;
    align-self: flex-start;
  }

  div {
    height: 56px;
    width: 100%;
  }

  svg:last-child {
    font-size: 25px;
  }

  div + div {
    margin-top: 8px;
  }

  button:first-child {
    margin-top: 16px;
  }
`;

export const Form = styled.form`
  padding: 0 134px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  a {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
    height: 21px;
    margin-top: 42px;
  }
`;

export const BG = styled.section`
  flex: 1;
  background: url(${bg}) no-repeat center center;
  background-size: cover;
`;
