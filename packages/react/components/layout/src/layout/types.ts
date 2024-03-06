import { vars } from "@soaf/themes";
import { AsElementProps, StyleProps } from "../core/types";

export type BoxProps = AsElementProps & StyleProps;

export type SpacingProps = {
  direction?: "horizontal" | "vertical";
  color?: keyof typeof vars.colors.$scale;
  size?: number;
  variant?: "solid" | "dashed";
} & React.HTMLAttributes<HTMLHRElement>;
