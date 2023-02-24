import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 581px;
  background: var(--color-brand2);
  margin-bottom: 60px;

  .slogan-content {
    display: flex;
    max-width: 748px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 50px;
    padding: 12px;

    .slogan-buttons {
      display: flex;
      gap: 30px;
    }
  }

  @media (max-width: 755px) {
    gap: 67px;
    margin-bottom: 120px;

    .slogan-buttons {
      width: 300px;
      flex-direction: column;
    }
  }
`;
