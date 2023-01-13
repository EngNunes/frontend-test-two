export enum FontFamily {
  Primary = "Roboto",
}

export enum FontWeight {
  Lighter = 300,
  Regular = "normal",
  Bold = "bold",
}

export enum LineHeight {
  Small = "100%",
  Medium = "120%",
  Large = "170%",
}

export enum FontSize {
  XSmall = "12px",
  Small = "16px",
  Regular = "20px",
  Large = "24px",
  XLarge = "36px",
}

export enum IconSize {
  Small = "16px",
  Regular = "24px",
  Large = "32px",
}

export class Color {
  public static readonly Black = "#161B20";
  public static readonly White = "#FCFCFC";
  public static readonly Pink = "#c6ff";
  public static readonly GrayDark = "#53595F";
}

export enum Spacing {
  XXSmall = "8px",
  XSmall = "16px",
  Small = "24px",
  Medium = "32px",
  Large = "48px",
  XLarge = "64px",
}

export const Breakpoint = {
  xs: 0, //em
  sm: 32,
  md: 48,
  lg: 64,
};
