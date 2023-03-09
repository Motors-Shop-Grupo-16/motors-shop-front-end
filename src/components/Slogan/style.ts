import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 581px;
  background: var(--color-brand2);

  .slogan-content {
    display: flex;
    max-width: 748px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 50px;
    margin: 12px;

    .slogan-buttons {
      display: flex;
      gap: 30px;
    }
  }

  @media (max-width: 755px) {
    gap: 67px;

    .slogan-buttons {
      width: 300px;
      flex-direction: column;
    }
  }
`;
