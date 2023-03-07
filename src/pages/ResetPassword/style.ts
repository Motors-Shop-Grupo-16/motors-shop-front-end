import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .footer {
    @media (min-height: 880px) {
      position: fixed;
    }
  }

  form {
    margin-top: 122px;
    margin-bottom: 122px;
  }

  button {
    &:hover {
      opacity: 0.8;
    }
  }
`;
