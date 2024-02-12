import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./index";
import { cn } from "@wds-utils/cn";

type SliderProps = React.ComponentProps<typeof Slider>;

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "Marbella/Slider",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = ({ className, ...props }: any) => (
  <Slider
    defaultValue={[50]}
    max={100}
    step={1}
    className={cn("w-[60%]", className)}
    {...props}
  />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
