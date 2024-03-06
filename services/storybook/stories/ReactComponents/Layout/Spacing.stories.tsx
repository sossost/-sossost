import "@soaf/react-components-layout/style.css";
import { Box, Spacing as _Spacing } from "@soaf/react-components-layout";
import { vars } from "@soaf/themes";

export default {
  title: "React Components/Layout/Spacing",
  component: _Spacing,
  decorators: [
    (Story) => (
      <Box padding={3} style={{ width: "300px", height: "300px" }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      options: ["horizontal", "vertical"],
      control: "select",
    },
    variant: {
      options: ["solid", "dashed"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const Spacing = {
  args: {
    color: "gray",
    size: 1,
    variant: "solid",
    direction: "horizontal",
  },
};
