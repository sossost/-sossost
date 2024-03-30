import type { StoryFn } from "@storybook/react";
import React from "react";

interface ContainerComponentProps {
  children: React.ReactNode;
}

export const ContainerComponent = ({ children }: ContainerComponentProps) => {
  return <div id="container">{children}</div>;
};

const Button = ({ label, primary }: { label: string; primary: boolean }) => {
  return (
    <button style={{ backgroundColor: primary ? "blue" : "red" }}>
      {label}
    </button>
  );
};

const meta = {
  title: "Example/ContainerComponent",
  component: ContainerComponent,
  subcomponents: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryFn<{}>;

export const Primary: Story = (args) => (
  <ContainerComponent {...args}>
    <Button label="test" primary={false} />
  </ContainerComponent>
);
