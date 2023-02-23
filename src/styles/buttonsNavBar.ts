import styled from 'styled-components';

export const Button = styled.button`
  width: 146px;
  height: 48px;
  padding: 12px 28px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.texts};
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
    background-color: ${(props) => props.theme.colors.grey0};
    border: 1.5px solid ${(props) => props.theme.colors.grey0};
    color: ${(props) => (props) => props.theme.colors.whiteFixed};

    &:hover {
      background-color: ${(props) => props.theme.colors.grey1};
      border: 1.5px solid ${(props) => props.theme.colors.grey1};
      color: ${(props) => (props) => props.theme.colors.whiteFixed};
    }
  }
  &.outline {
    background-color: transparent;
    border: 1.5px solid ${(props) => props.theme.colors.grey0};
    color: ${(props) => (props) => props.theme.colors.grey0};

    &:hover {
      background-color: ${(props) => props.theme.colors.grey1};
      border: 1.5px solid ${(props) => props.theme.colors.grey1};
      color: ${(props) => (props) => props.theme.colors.grey10};
    }
  }
  &.outlineGrey {
    background-color: transparent;
    border: 1.5px solid ${(props) => props.theme.colors.grey4};
    color: ${(props) => (props) => props.theme.colors.grey0};

    &:hover {
      background-color: ${(props) => props.theme.colors.grey1};
      border: 1.5px solid ${(props) => props.theme.colors.grey1};
      color: ${(props) => (props) => props.theme.colors.grey10};
    }
  }
  &.brand {
    background-color: ${(props) => props.theme.colors.brand1};
    border: 1.5px solid ${(props) => props.theme.colors.brand1};
    color: ${(props) => (props) => props.theme.colors.whiteFixed};
    &:hover {
      background-color: ${(props) => props.theme.colors.brand2};
      border: 1.5px solid ${(props) => props.theme.colors.brand2};
      color: ${(props) => (props) => props.theme.colors.whiteFixed};
    }
  }
  &.brandOpacity {
    background-color: ${(props) => props.theme.colors.brand4};
    border: 1.5px solid ${(props) => props.theme.colors.brand4};
    color: ${(props) => (props) => props.theme.colors.brand1};
  }
  &.brandDisable {
    background-color: ${(props) => props.theme.colors.brand3};
    border: 1.5px solid ${(props) => props.theme.colors.brand3};
    color: ${(props) => (props) => props.theme.colors.brand4};
  }
  &.light {
    background-color: ${(props) => props.theme.colors.grey10};
    border: 1.5px solid ${(props) => props.theme.colors.grey10};
    color: ${(props) => (props) => props.theme.colors.grey1};
  }

  &.outlineLight {
    background-color: transparent;
    border: 1.5px solid ${(props) => props.theme.colors.grey10};
    color: ${(props) => (props) => props.theme.colors.grey10};
    &:hover {
      background-color: ${(props) => props.theme.colors.grey10};
      border: 1.5px solid ${(props) => props.theme.colors.grey10};
      color: ${(props) => (props) => props.theme.colors.grey1};
    }
  }

  &.negative {
    background-color: ${(props) => props.theme.colors.grey6};
    border: 1.5px solid ${(props) => props.theme.colors.grey6};
    color: ${(props) => (props) => props.theme.colors.grey2};
    &:hover {
      background-color: ${(props) => props.theme.colors.grey5};
      border: 1.5px solid ${(props) => props.theme.colors.grey5};
      color: ${(props) => (props) => props.theme.colors.grey2};
    }
  }
  &.disable {
    background-color: ${(props) => props.theme.colors.grey5};
    border: 1.5px solid ${(props) => props.theme.colors.grey5};
    color: ${(props) => (props) => props.theme.colors.whiteFixed};
  }
  &.alert {
    background-color: ${(props) => props.theme.colors.alert3};
    border: 1.5px solid ${(props) => props.theme.colors.alert3};
    color: ${(props) => (props) => props.theme.colors.alert1};
    &:hover {
      background-color: ${(props) => props.theme.colors.alert2};
      border: 1.5px solid ${(props) => props.theme.colors.alert2};
      color: ${(props) => (props) => props.theme.colors.alert1};
    }
  }
  &.sucess {
    background-color: ${(props) => props.theme.colors.sucess3};
    border: 1.5px solid ${(props) => props.theme.colors.sucess3};
    color: ${(props) => (props) => props.theme.colors.sucess1};
    &:hover {
      background-color: ${(props) => props.theme.colors.sucess2};
      border: 1.5px solid ${(props) => props.theme.colors.sucess2};
      color: ${(props) => (props) => props.theme.colors.sucess1};
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
  color: ${(props) => props.theme.colors.grey0};
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.grey8};
    color: ${(props) => props.theme.colors.grey0};
    border: none;
  }
`;
