import styled from "styled-components";

export const Container = styled.section`
  margin: 40px 0 24px;
  > h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LABEL_GRAY};
  }
`;
