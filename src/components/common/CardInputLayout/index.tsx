import { PropsWithChildren, useEffect, useState } from 'react';

import { css, keyframes } from '@emotion/react';

import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';

export type Props = {
  /**
   * Sets the title for the card input field.
   */
  headerText: string;
  /**
   * Sets the description for the card input field.
   */
  description?: string;
  /**
   * Sets the label for the card input field.
   */
  label?: string;
} & PropsWithChildren;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardInputLayout = ({ headerText, description, label, children }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
      flex={0}
      css={css`
        max-width: 500px;
        animation: ${mounted ? fadeInUp : 'none'} 0.5s ease-out;
      `}
    >
      <Text variant="Title" fontWeight="bold">
        {headerText}
      </Text>
      {description && (
        <Text variant="Caption" fontWeight="regular" color="GY1">
          {description}
        </Text>
      )}
      <Text
        variant="Body"
        fontWeight="regular"
        css={css`
          margin: 6px 0px;
        `}
      >
        {label}
      </Text>
      <Flex gap="8px" width="100%">
        {children}
      </Flex>
    </Flex>
  );
};
