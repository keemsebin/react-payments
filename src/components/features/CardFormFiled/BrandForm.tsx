import { useCallback } from 'react';

import { Button, useModal } from '@sebin0580/modal';

import { CardFormProps } from './CardFormFiled.types';

import { CardInputLayout } from '../../common/CardInputLayout';
import { CardBrandModal } from '../CardBrandModal';
// import { Button } from '@/components/common/Button';
import { CardBrand } from '@/constants/cardBrand';
import { useCardForm } from '@/hooks/useCardForm';

export const BrandForm = ({ onNext }: CardFormProps) => {
  const { formData: brandFormData, dispatch: setBrandFormData } = useCardForm();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleClickOption = useCallback(
    (option: CardBrand) => {
      setBrandFormData({
        type: 'BRAND',
        payload: { ...brandFormData, brand: option },
      });
      onNext();
    },
    [brandFormData, onNext, setBrandFormData]
  );

  return (
    <>
      <CardInputLayout
        headerText="카드사를 선택해 주세요."
        description="현재 국내 카드사만 가능합니다."
      >
        <Button size="xl" width="100%" color="#333333" shape="rounded" onClick={handleOpenModal}>
          카드사 선택하기
        </Button>
      </CardInputLayout>
      <CardBrandModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        title="카드사 선택"
        onSelectBrand={handleClickOption}
      />
    </>
  );
};
