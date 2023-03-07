import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-grey8);

  .footer {
    @media (min-height: 950px) {
      position: fixed;
    }
  }

  form {
    margin-top: 122px;
    margin-bottom: 122px;
  }

  .form-login-account {
    text-align: center;
  }

  button {
    &:hover {
      opacity: 0.8;
    }
  }

  .form-login-password {
    display: flex;
    justify-content: right;
    p {
      cursor: pointer;
    }
    &:hover {
      p {
        color: var(--color-brand2);
      }
    }
  }
`;
