import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import { AccordionPanelProps } from "./types";
import { accordionPanelStyle, panelHeight } from "./styles.css";
import { useAccordionContext } from "./AccordionContext";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const AccordionPanel = (
  props: AccordionPanelProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { itemName = "", children, className, style, ...rest } = props;
  const innerRef = useRef<HTMLDivElement>(null);

  const { activeItems } = useAccordionContext();
  const isActive = activeItems.includes(itemName);

  const [currentPanelHeight, setCurrentPanelHeight] = useState<string>("0");

  useEffect(() => {
    if (!innerRef.current) return;

    setCurrentPanelHeight(
      isActive ? `${innerRef.current.clientHeight}px` : "0",
    );
  }, [isActive, activeItems]);

  return (
    <div
      {...rest}
      ref={ref}
      className={clsx([accordionPanelStyle, className])}
      data-action-item={isActive}
      style={{
        ...assignInlineVars({
          [panelHeight]:
            currentPanelHeight ?? `${innerRef.current?.clientHeight}px`,
        }),
        ...style,
      }}
    >
      <div data-name="pannel-inner" ref={innerRef}>
        {children}
      </div>
    </div>
  );
};

const _AccordionPanel = React.forwardRef(AccordionPanel);
export { _AccordionPanel as AccordionPanel };
