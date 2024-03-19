import "@soaf/react-components-button/style.css";
import { Button as _Button } from "@soaf/react-components-button";
import { Text } from "@soaf/react-components-layout";
import { vars } from "@soaf/themes";
import { useButton, useToggleButton } from "@soaf/react-hooks-button";

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
