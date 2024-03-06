import React from "react";
import "@soaf/react-components-layout/style.css";
import { Flex as _Flex } from "@soaf/react-components-layout";

export default {
  title: "React Components/Layout/Flex",
  component: _Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const FlexStory = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    FlexShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
    },
  },
  render: (args) => (
    <_Flex {...args}>
      <div>flex</div>
      <div>test</div>
    </_Flex>
  ),
};
