import type { Meta, StoryObj } from '@storybook/react';

import { CardPreview } from '@/components/features/CardPreview';
import { CardInputType } from '@/hooks/useCardInput';

const meta = {
  title: 'features/CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '카드 미리보기 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

const createCardNumbers = (count: number, value: string): CardInputType[] => {
  return Array.from({ length: count }, () => ({ value, isValid: true }));
};

export const Default: Story = {
  args: {
    cardNumbers: createCardNumbers(4, '1234'),
    expireDate: [
      { value: '12', isValid: true },
      { value: '34', isValid: true },
    ],
  },
  argTypes: {
    cardNumbers: {
      control: false,
    },
    expireDate: {
      control: false,
    },
  },
};

export const VisaCard: Story = {
  args: {
    cardNumbers: [{ value: '4123', isValid: true }, ...createCardNumbers(3, '5678')],
    expireDate: [
      { value: '12', isValid: true },
      { value: '25', isValid: true },
    ],
  },
  argTypes: {
    cardNumbers: {
      control: false,
    },
    expireDate: {
      control: false,
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardNumbers: [{ value: '5412', isValid: true }, ...createCardNumbers(3, '3456')],
    expireDate: [
      { value: '06', isValid: true },
      { value: '26', isValid: true },
    ],
  },
  argTypes: {
    cardNumbers: {
      control: false,
    },
    expireDate: {
      control: false,
    },
  },
};
