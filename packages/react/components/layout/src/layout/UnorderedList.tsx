import { vars } from "@soaf/themes";
import { Flex } from "./Flex";
import { UnorderedListProps } from "./types";
import * as React from "react";

const UnorderedList = (
  props: UnorderedListProps,
  ref: React.Ref<HTMLOListElement>,
) => {
  const { listStyleType = "disc", spacing = 3, children, ...rest } = props;

  return (
    <Flex
      {...rest}
      ref={ref}
      direction="column"
      style={{
        gap: vars.box.spacing[spacing],
        listStyleType: listStyleType as string,
      }}
    >
      {children}
    </Flex>
  );
};

const _UnorderedList = React.forwardRef(UnorderedList);
export { _UnorderedList as UnorderedList };
