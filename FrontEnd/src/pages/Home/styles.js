import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    overflow-y: scroll;
    width: 1137px;
    margin: 50px auto;
    grid-area: "content";
    padding: 40px 0px;
    div {
      align-items: center;
      justify-content: space-between;
      display: flex;
    }
    button {
      width: 100%;
    }
    > div {
      a {
        width: 200px;
        height: 50px;
        padding: 13px 25px;
        justify-content: space-around;
        color: ${({ theme }) => theme.COLORS.BG_MEDIUM};
        display: flex;
        align-items: center;
        svg {
          margin-right: 8px;
        }
      }
    }
  }
  background-color: ${({ theme }) => theme.COLORS.BG_MEDIUM};
`;

export const PrevContainer = styled.ul`
  margin-top: 37.5px;
  list-style-type: none;
  > li {
    margin-bottom: 24px;
  }
`;
