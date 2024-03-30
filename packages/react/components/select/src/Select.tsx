import * as React from "react";
import { SelectProps } from "./types";
import { useSelect } from "@sossost/react-hooks-select";

import { clsx } from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import {
  colorVariant,
  errorBorderColorVariant,
  focusBorderColorVariant,
  selectStyle,
} from "./style.css";
import { vars } from "@sossost/themes";

const Select = (props: SelectProps, ref: React.Ref<HTMLSelectElement>) => {
  const {
    color = "gray",
    size = "lg",
    variant = "outline",
    errorBorderColor = "#E53E3E",
    focusBorderColor = "#3182CE",
    className,
    style,
    ...rest
  } = props;

  const { selectProps } = useSelect(rest);

  return (
    <select
      {...selectProps}
      ref={ref}
      className={clsx([
        selectStyle({
          size,
          variant,
        }),
        className,
      ])}
      style={{
        ...assignInlineVars({
          [colorVariant]: vars.colors.$scale[color][900],
          [errorBorderColorVariant]: errorBorderColor,
          [focusBorderColorVariant]: focusBorderColor,
        }),
        ...style,
      }}
    />
  );
};

const _Select = React.forwardRef(Select);

_Select.displayName = "Input";

export { _Select as Select };
