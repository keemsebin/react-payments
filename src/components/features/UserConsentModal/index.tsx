import { useState } from 'react';

import { css } from '@emotion/react';
import { Button, Modal, ModalProps } from '@sebin0580/modal';

import { CheckBox } from '@/components/common/CheckBox';
import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';

type ConsentItemProps = {
  text: string;
  checked: boolean;
  onToggle: () => void;
};

const ConsentItem = ({ text, checked, onToggle }: ConsentItemProps) => (
  <Flex alignItems="center" gap="8px" onClick={onToggle}>
    <CheckBox checked={checked} />
    <Text
      variant="Caption"
      color={checked ? 'GY3' : 'GY2'}
      css={css`
        cursor: pointer;
      `}
    >
      {text}
    </Text>
  </Flex>
);

export const UserConsentModal = ({ isOpen, title, maxWidth, onClose }: ModalProps) => {
  const consentText = ['[필수] 개인정보 수집 및 이용 동의', '[필수] 고객정보 제 3자 제공 동의'];
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(consentText.length).fill(false)
  );

  const toggleCheckBox = (index: number) => {
    setCheckedItems((prev) => {
      const newCheckedItems = [...prev];
      newCheckedItems[index] = !newCheckedItems[index];
      return newCheckedItems;
    });
  };
  const allChecked = checkedItems.every((checked) => checked);

  return (
    <Modal
      isOpen={isOpen}
      title={title}
      showCloseButton={false}
      closeOnOutsideClick={false}
      position="bottom"
      maxWidth={maxWidth}
      onClose={onClose}
    >
      <Flex
        direction="column"
        alignItems="flex-start"
        gap="10px"
        width="100%"
        padding="10px 0 15px 0"
      >
        {consentText.map((text, index) => (
          <ConsentItem
            key={index}
            text={text}
            checked={checkedItems[index]}
            onToggle={() => toggleCheckBox(index)}
          />
        ))}
      </Flex>
      <Button size="md" width="100%" onClick={onClose} disabled={!allChecked}>
        동의하고 저장하기
      </Button>
    </Modal>
  );
};
