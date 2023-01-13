import styled, { css } from "styled-components";

import {
  Color,
  FontFamily,
  FontWeight,
  FontSize,
  LineHeight,
  Spacing,
} from "@atomic/obj.constants/constants";

export interface TypographyProps {
  color?: Color;
  center: boolean;
}

const BaseTextCss = css<TypographyProps>`
  ${(color: Color, center: boolean) => css`
    ${center && "text-align: center;"}
    ${color && `color: ${color};`}
  `}
`;

export const H1 = styled.h1<TypographyProps>`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XLarge};
  font-weight: ${FontWeight.Regular};
  margin-bottom: ${Spacing.Medium};
  margin-top: ${Spacing.Large};
  ${BaseTextCss};
`;
H1.displayName = "H1";

export const Body = styled.p<TypographyProps>`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Regular};
  font-weight: ${FontWeight.Regular};
  line-height: ${LineHeight.Large};
  margin: 0;
  color: ${Color.Black};
`;
Body.displayName = "Body";

export const BodySecondary = styled.label`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Bold};
  line-height: ${LineHeight.Large};
  margin: 0;
  color: ${Color.GrayDark};
`;
