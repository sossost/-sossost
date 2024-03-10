import * as React from "react";
import { UnorderedList } from "./UnorderedList";
import { ListProps } from "./types";

const List = (props: ListProps, ref: React.Ref<HTMLOListElement>) => {
  const { variant = "unordered", ...rest } = props;

  if (variant === "unordered") {
    return <UnorderedList {...rest} ref={ref} />;
  }

  return <UnorderedList {...rest} ref={ref} />;
};

const _List = React.forwardRef(List);
export { _List as List };
