import type { Meta, StoryObj } from "@storybook/react";
import { Scratchpad } from "./scratchpad";

const meta = {
  component: Scratchpad,
} satisfies Meta<typeof Scratchpad>;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export default meta;
