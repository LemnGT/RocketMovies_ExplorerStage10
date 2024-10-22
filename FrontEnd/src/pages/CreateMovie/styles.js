import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  main {
    grid-area: content;
    overflow-y: auto;
  }
  .tags {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.COLORS.BG_DARK};
    padding: 16px;
    border-radius: 10px;
  }
`;

export const Form = styled.form`
  max-width: 1200px;
  margin: 40px auto;

  > header {
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    gap: 40px;
    > div {
      height: 55px;
    }
  }
  a {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-bottom: 24px;
    svg {
      font-size: 16px;
      margin-right: 8px;
    }
  }
  h1 {
    margin-bottom: 40px;
    text-align: left;
    font-weight: medium;
    font-size: 36px;
  }
  h2 {
    color: ${({ theme }) => theme.COLORS.LABEL_GRAY};
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 24px;
    font-weight: 400;
  }
  > footer {
    gap: 40px;
    display: flex;

    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.BG_DARK};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
    button {
      margin-top: 40px;
    }
  }
`;
