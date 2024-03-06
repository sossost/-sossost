import * as React from "react";
import { SpacingProps } from "./types";
import { vars } from "@soaf/themes";

const Spacing = (props: SpacingProps, ref: React.Ref<HTMLHRElement>) => {
  const {
    color = "gray",
    variant = "solid",
    size = 1,
    direction = "horizontal",
  } = props;

  const borderStyle =
    direction === "horizontal"
      ? {
          width: "100%",
          borderWidth: `0 0 ${size}px 0`,
        }
      : {
          height: "100%",
          borderWith: `0 0 0 ${size}px`,
        };

  return (
    <hr
      {...props}
      ref={ref}
      style={{
        borderStyle: variant,
        borderColor: vars.colors.$scale?.[color]?.[200] ?? color,
        ...borderStyle,
        ...props.style,
      }}
    />
  );
};

const _Spacing = React.forwardRef(Spacing);

export { _Spacing as Spacing };
