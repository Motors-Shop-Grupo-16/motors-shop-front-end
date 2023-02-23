import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* width: 100vw; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 60px;
  gap: 200px;
  .banner-content{
    width: 100%;
    background: var(--color-brand2);
    height: 581px;
  }
  @media (max-width: 755px) {
    margin: auto 12px;
    gap: 67px;
  }
`;
