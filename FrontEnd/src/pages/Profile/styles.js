import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  div {
    width: 100%;
    height: 56px;
  }

  div + div {
    margin-top: 8px;
  }
  div:nth-child(4) {
    margin-top: 24px;
  }
  div:nth-child(5) {
    margin-bottom: 8px;
  }

  > header {
    display: flex;
    width: 100%;
    height: 144px;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.PINK_LIGHT};
    a {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};
      height: 21px;
      margin-top: 42px;
    }

    padding: 0 144px;

    svg {
      font-size: 16px;
      margin-right: 2.5px;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;
`;

export const Avatar = styled.section`
  position: relative;
  margin: -124px auto 32px;
  width: 186px;
  height: 186px;
  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.FONT_WHITE};
    }
  }
`;
