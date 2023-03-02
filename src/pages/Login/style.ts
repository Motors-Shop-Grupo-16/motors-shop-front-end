import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;

  form {
    margin-top: 122px;
    margin-bottom: 122px;
  }

  background: var(--color-grey8);
  /* .footer {
      position: fixed;
      bottom: 0;
      left: 0;
    } */
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

  @media (max-width: 755px) {
    .footer {
      position: relative;
      bottom: 0;
      left: 0;
    }
  }
`;
