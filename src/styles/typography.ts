import styled, { css } from "styled-components";

import { BaseTitle } from "../components/BaseTitle/BaseTitle";

import { IHeadingProps } from "./interfaces";

export const Heading = styled(BaseTitle)<IHeadingProps>`
  font-family: "Lexend", sans-serif;
  font-style: normal;
  font-weight: ${(props) => (props.weight ? props.weight : "500")};
  color: var(${(props) => (props.color ? props.color : "--color-grey1")});

  ${(props) => {
    switch (props.style) {
      case "heading-1":
        return css`
          font-size: 44px;
          line-height: 56px;
        `;
      case "heading-2":
        return css`
          font-size: 46px;
          line-height: 45px;
        `;
      case "heading-3":
        return css`
          font-size: 32px;
          line-height: 40px;
        `;
      case "heading-4":
        return css`
          font-size: 28px;
          line-height: 35px;
        `;
      case "heading-5":
        return css`
          font-size: 24px;
          line-height: 30px;
        `;
      case "heading-6":
        return css`
          font-size: 20px;
          line-height: 25px;
        `;
      case "heading-7":
        return css`
          font-size: 16px;
          line-height: 20px;
        `;
      default:
        return false;
    }
  }}
`;

interface IBodyTextProps {
  style: string;
  weight: string;
  color: string;
}

export const BodyText = styled.p<IBodyTextProps>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.weight};
  color: var(${(props) => props.color});

  ${(props) => {
    switch (props.style) {
      case "body-1":
        return css`
          font-size: 16px;
          line-height: 28px;
        `;
      case "body-2":
        return css`
          font-size: 14px;
          line-height: 24px;
        `;
      default:
        return false;
    }
  }}
`;
