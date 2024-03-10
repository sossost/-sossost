import * as React from "react";
import { vars } from "@soaf/themes";
import { Flex } from "./Flex";
import { OrderListProps } from "./types";

const OrderedList = (
  props: OrderListProps,
  ref: React.Ref<HTMLOListElement>,
) => {
  const { spacing = 3, children, ...rest } = props;

  return (
    <Flex
      {...rest}
      ref={ref}
      direction="column"
      style={{ gap: vars.box.spacing[spacing], listStyleType: "decimal" }}
    >
      {children}
    </Flex>
  );
};

const _OrderedList = React.forwardRef(OrderedList);
export { _OrderedList as OrderedList };
