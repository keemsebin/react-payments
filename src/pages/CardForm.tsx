import { useEffect, useRef } from 'react';

import { useModal } from '@sebin0580/modal';

import { Flex } from '@/components/common/Flex';
import { BrandForm } from '@/components/features/CardFormFiled/BrandForm';
import { CardNumberForm } from '@/components/features/CardFormFiled/CardNumberForm';
import { CVCForm } from '@/components/features/CardFormFiled/CVCForm';
import { ExpireDateForm } from '@/components/features/CardFormFiled/ExpireDateForm';
import { PassWordForm } from '@/components/features/CardFormFiled/PassWordForm';
import { CardFormLayout } from '@/components/features/CardFormLayout';
import { CardPreview } from '@/components/features/CardPreview';
import { UserConsentModal } from '@/components/features/UserConsentModal';
import { STEPS, StepType } from '@/constants/stackStep';
import { CardFormProvider } from '@/context/cardFormContext';
import { useStack } from '@/hooks/useStack';

export const CardForm = () => {
  const { Stack, setStep } = useStack<StepType>(STEPS.CARD_NUMBER);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const modalShownRef = useRef(false);

  useEffect(() => {
    if (!modalShownRef.current) {
      handleOpenModal();
      modalShownRef.current = true;
    }
  }, [handleOpenModal]);

  return (
    <>
      <CardFormProvider>
        <Flex>
          <CardPreview />
        </Flex>

        <CardFormLayout>
          <Stack>
            <Stack.Step name="카드번호">
              <CardNumberForm onNext={() => setStep('카드사')} />
            </Stack.Step>
            <Stack.Step name="카드사">
              <BrandForm onNext={() => setStep('유효기간')} />
            </Stack.Step>
            <Stack.Step name="유효기간">
              <ExpireDateForm onNext={() => setStep('CVC')} />
            </Stack.Step>
            <Stack.Step name="CVC">
              <CVCForm onNext={() => setStep('비밀번호')} />
            </Stack.Step>
            <Stack.Step name="비밀번호">
              <PassWordForm onNext={() => setStep('비밀번호')} />
            </Stack.Step>
          </Stack>
        </CardFormLayout>
      </CardFormProvider>
      <UserConsentModal
        maxWidth="500px"
        isOpen={isOpen}
        title="약관에 동의해주세요."
        onClose={handleCloseModal}
      />
    </>
  );
};
