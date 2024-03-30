import "@sossost/react-components-button/style.css";
import { Button as _Button } from "@sossost/react-components-button";
import { Text } from "@sossost/react-components-layout";
import { vars } from "@sossost/themes";
import { useButton, useToggleButton } from "@sossost/react-hooks-button";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: false,
    leftSlot: "😀",
  },
};

export const TextButtonStory = {
  render: () => {
    const { buttonProps, isSelected } = useToggleButton(
      {
        elementType: "button",
      },
      false,
    );

    return (
      <_Button
        {...buttonProps}
        variant={isSelected ? "solid" : "outline"}
        color="green"
      >
        {isSelected ? "o" : "x"}
      </_Button>
    );
  },
};
