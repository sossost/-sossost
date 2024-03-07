import React from "react";
import "@soaf/react-components-layout/style.css";
import { Grid as _Grid } from "@soaf/react-components-layout";

export default {
  title: "React Components/Layout/Grid",
  component: _Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const GridStory = {
  args: {
    as: "div",
    padding: "5",
    background: "pink",
    GridShadow: "xl",
    borderRadius: "md",
    justify: "space-between",
    style: {
      width: "300px",
    },
  },
  render: (args) => (
    <_Grid {...args}>
      <div>Grid</div>
      <div>test</div>
    </_Grid>
  ),
};
