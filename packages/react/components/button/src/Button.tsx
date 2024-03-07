import * as React from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  buttonStyle,
  activeColorVariant,
  enableColorVariant,
  hoverColorVariant,
  spanStyle,
  spinnerStyle,
} from "./style.css";
import { vars } from "@soaf/themes";
import { useButton } from "@soaf/react-hooks-button";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const { buttonProps } = useButton(props);
  const {
    variant = "solid",
    size = "md",
    color = "gray",
    leftSlot,
    rightSlot,
    isLoading,
    children,
    style,
  } = props;

  const enableColor = vars.colors.$scale[color][500];
  const hoverColor =
    variant === "solid"
      ? vars.colors.$scale[color][600]
      : vars.colors.$scale[color][50];
  const activeColor =
    variant === "solid"
      ? vars.colors.$scale[color][700]
      : vars.colors.$scale[color][100];

  return (
    <button
      {...buttonProps}
      role="button"
      ref={ref}
      className={clsx([
        buttonStyle({
          size,
          variant,
        }),
      ])}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
      }}
    >
      {isLoading && <div className={spinnerStyle({ size })} />}
      {leftSlot && <span className={spanStyle({ size })}>{leftSlot}</span>}
      <span>{children}</span>
      {rightSlot && <span className={spanStyle({ size })}>{rightSlot}</span>}
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
