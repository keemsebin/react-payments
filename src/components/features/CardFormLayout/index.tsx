import { ComponentProps, FormEvent, ReactNode } from 'react';

import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import { CardFormStyled } from './CardFormLayout.styled';

import { Button } from '@/components/common/Button';
import { Flex } from '@/components/common/Flex';
import { useCardForm } from '@/hooks/useCardForm';

export type Props = {
  /**
   * Form content to be rendered inside the layout.
   */
  children: ReactNode;
} & ComponentProps<'form'>;

export const CardFormLayout = ({ children }: Props) => {
  const { formData } = useCardForm();
  const navigate = useNavigate();
  const isFilledAndValid = (item: { value: string; isValid: boolean }) =>
    item.value !== '' && item.isValid;

  const allValid =
    formData.cardNumber.every(isFilledAndValid) &&
    formData.expireDate.every(isFilledAndValid) &&
    isFilledAndValid(formData.cvc) &&
    isFilledAndValid(formData.password) &&
    formData.brand !== null;

  const handleCardFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!allValid) return;

    navigate('/card/confirm', {
      state: {
        cardNumber: formData.cardNumber[0],
        brand: formData.brand,
      },
    });
  };

  return (
    <CardFormStyled onSubmit={handleCardFormSubmit}>
      <Flex
        justifyContent="flex-start"
        direction="column"
        gap="10px"
        margin="0px 25px 5px 25px"
        padding="0 15px"
      >
        {children}
      </Flex>
      <Flex
        flex={0}
        css={css`
          position: sticky;
          bottom: 0;
          width: 100%;
        `}
      >
        <Button type="submit" disabled={!allValid}>
          확인
        </Button>
      </Flex>
    </CardFormStyled>
  );
};
