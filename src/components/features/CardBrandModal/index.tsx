import { css } from '@emotion/react';
import { Modal, ModalProps } from '@sebin0580/modal';

import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';
import { CARD_BRAND, CardBrand } from '@/constants/cardBrand';

type CardBrandProps = {
  onSelectBrand: (option: CardBrand) => void;
} & ModalProps;

export const CardBrandModal = ({ isOpen, onClose, onSelectBrand }: CardBrandProps) => {
  const categories = Object.keys(CARD_BRAND) as CardBrand[];

  return (
    <Modal isOpen={isOpen} title="카드사 선택" onClose={onClose}>
      <Flex
        width="100%"
        gap="8px"
        padding="5px 0"
        justifyContent="space-between"
        alignItems="center"
        margin="10px 0 0 0"
        css={css`
          flex-wrap: wrap;
        `}
      >
        {categories.map((category) => (
          <Flex
            key={category}
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap="10px"
            css={css`
              flex-basis: calc(25% - 9px);
              cursor: pointer;
              box-sizing: border-box;
            `}
            onClick={() => {
              onSelectBrand(category);
              onClose();
            }}
          >
            <img src={CARD_BRAND[category].image} alt={category} width="30px" height="30px" />
            <Text variant="Caption">{category}</Text>
          </Flex>
        ))}
      </Flex>
    </Modal>
  );
};
