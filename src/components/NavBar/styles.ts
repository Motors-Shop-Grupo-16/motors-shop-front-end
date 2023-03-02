import styled, { css } from "styled-components";
import { divProps } from "./interfaces";

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 80px;
  background-color: var(--color-grey10);
  border-bottom: 2px solid var(--color-grey6);
`;

export const Container = styled.div<divProps>`
  display: flex;
  width: 1600px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  margin-right: 60px;
  margin-left: 60px;
  /* img {
    height: 26  px;
    width: 153px;
  } */

  .btn_menu {
    width: 50px;
    height: 50px;
    display: block;

    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: var(--color-grey10);
  }
  .separator {
    width: 100%;
    height: 2px;
    background-color: var(--color-grey6);
    margin: 10px;
  }

  @media (min-width: 1000px) {
    /* img {
      margin-left: 15px;
    } */
    .btn_menu {
      display: none;
    }
    .separator {
      width: 2px;
      height: 79px;
      margin: 5px;
    }
  }
  @media (max-width: 800px) {
    margin-right: 12px;
    margin-left: 12px;
    /* img {
      margin-left: 60px;
      margin-right: 60px;
    } */
  }
`;

export const NavContainer = styled.div<divProps>`
  display: none;
  align-items: center;
  ${(props) =>
    props.isVisible &&
    css`
      display: flex;
      flex-direction: column;
      padding: 0 0 15px 0;
      z-index: 1;
    `};
  width: 100%;
  position: absolute;
  top: 80px;
  right: 1px;
  background-color: var(--color-grey9);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  a {
    font-size: 16px;
    ${(props) =>
      props.user === true
        ? css`
            font-weight: 400;
          `
        : css`
            font-weight: 600;
          `};
  }
  @media (min-width: 430px) {
    display: none;
    ${(props) =>
      props.isVisible &&
      css`
        display: flex;
        width: 200px;
        position: absolute;
        right: 12px;
        top: 67px;
        margin-left: auto;
      `};
  }

  @media (min-width: 1000px) {
    display: none;
    width: auto;
    height: 80px;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 0;
    right: 0;
    background-color: transparent;
    padding: 0;
    border: none;
    box-shadow: none;
    z-index: 1;
  }
`;

export const UserUl = styled.ul<divProps>`
  list-style: none;
  display: flex;
  gap: 5px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  color: var(--color-grey2);
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* div {
      width: 32px;
      height: 32px;
      color: var(--color-whiteFixed);
      background: var(--color-brand2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 15px;
    } */
    button {
      width: 120px;
      padding: 0;
      font-size: 16px;
    }
  }

  .sub_menu {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      a {
        width: auto;
      }
    }
    @media (min-width: 450px) {
      display: flex;
    }
  }
  @media (min-width: 400px) {
    flex-direction: column;
  }

  @media (min-width: 1000px) {
    flex-direction: column;
    .sub_menu {
      display: none;
      ${(props) =>
        props.submenuIsVisible &&
        css`
          display: flex;
          position: absolute;
          top: 78px;
          right: -5px;
          background: var(--color-grey9);
          box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
          width: 170px;
          padding: 5px;
          border-radius: 4px;
        `};
    }
  }
`;

export const NavUl = styled.ul<divProps>`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: left;
  gap: 44px;
  li {
    width: 100%;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0;

    .link_li {
      justify-content: flex-start;
    }
    &.li_btn {
      padding: 0;
      align-items: center;
      display: flex;
      .btn_li {
        width: 90%;
        justify-content: center;
      }
    }
  }
  @media (min-width: 430px) {
    .btn_li {
      justify-content: center;
      width: 80%;
    }
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    li {
      .link_li {
        justify-content: center;
      }
    }
  }
`;
