import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 290px;
  max-width: 290px;
  padding: 48px 24px;
  border-radius: 4px;
  background: var(--color-grey10);
  gap: 24px;
  @media (min-width: 520px) {
    max-width: 412px;
    min-width: 412px;
    padding: 48px 48px;
  }
`;
