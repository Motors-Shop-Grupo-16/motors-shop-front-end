import styled from "styled-components";

export const Button = styled.button`
  width: 146px;
  height: 48px;
  padding: 12px 28px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 600;

  @media (min-width: 400px) {
    width: 119px;
    height: 38px;
    padding: 12px 20px;
    font-size: 14px;
  }
  &.medium {
    width: 119px;
    height: 38px;
    padding: 12px 20px;
    font-size: 14px;
  }
  &.grey {
    background-color: var(--color-grey0);
    border: 1.5px solid var(--color-grey0);
    color: var(--color-whiteFixed);

    &:hover {
      background-color: var(--color-grey1);
      border: 1.5px solid var(--color-grey1);
      color: var(--color-whiteFixed);
    }
  }
  &.outline {
    background-color: transparent;
    border: 1.5px solid var(--color-grey0);
    color: var(--color-grey0);

    &:hover {
      background-color: var(--color-grey1);
      border: 1.5px solid var(--color-grey1);
      color: var(--color-grey10);
    }
  }
  &.outlineGrey {
    background-color: transparent;
    border: 1.5px solid var(--color-grey4);
    color: var(--color-grey0);

    &:hover {
      background-color: var(--color-grey1);
      border: 1.5px solid var(--color-grey1);
      color: var(--color-grey10);
    }
  }
  &.brand {
    background-color: var(--color-brand1);
    border: 1.5px solid var(--color-brand1);
    color: var(--color-whiteFixed);
    &:hover {
      background-color: var(--color-brand2);
      border: 1.5px solid var(--color-brand2);
      color: var(--color-whiteFixed);
    }
  }
  &.brandOpacity {
    background-color: var(--color-brand4);
    border: 1.5px solid var(--color-brand4);
    color: var(--color-brand1);
  }
  &.brandDisable {
    background-color: var(--color-brand3);
    border: 1.5px solid var(--color-brand3);
    color: var(--color-brand4);
  }
  &.light {
    background-color: var(--color-grey10);
    border: 1.5px solid var(--color-grey10);
    color: var(--color-grey1);
  }

  &.outlineLight {
    background-color: transparent;
    border: 1.5px solid var(--color-grey10);
    color: var(--color-grey10);
    &:hover {
      background-color: var(--color-grey10);
      border: 1.5px solid var(--color-grey10);
      color: var(--color-grey1);
    }
  }

  &.negative {
    background-color: var(--color-grey6);
    border: 1.5px solid var(--color-grey6);
    color: var(--color-grey2);
    &:hover {
      background-color: var(--color-grey5);
      border: 1.5px solid var(--color-grey5);
      color: var(--color-grey2);
    }
  }
  &.disable {
    background-color: var(--color-grey5);
    border: 1.5px solid var(--color-grey5);
    color: var(--color-whiteFixed);
  }
  &.alert {
    background-color: var(--color-alert3);
    border: 1.5px solid var(--color-alert3);
    color: var(--color-alert1);
    &:hover {
      background-color: var(--color-alert3);
      border: 1.5px solid var(--color-alert2);
      color: var(--color-alert1);
    }
  }
  &.sucess {
    background-color: var(--color-sucess3);
    border: 1.5px solid var(--color-sucess3);
    color: var(--color-sucess1);
    &:hover {
      background-color: var(--color-sucess2);
      border: 1.5px solid var(--color-sucess2);
      color: var(--color-sucess1);
    }
  }
`;

export const LinkBtn = styled(Button)`
  /* ex: 
      -> <LinkBtn as='a' href='#'>Ola</LinkBtn> 
    */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: var(--color-grey0);
  border: none;
  &:hover {
    background-color: var(--color-grey8);
    color: var(--color-grey0);
    border: none;
  }
`;
