export const CARD_BRAND = {
  BC카드: {
    image: '/images/Card/BC.svg',
    color: '#F04651',
  },
  신한카드: {
    image: '/images/Card/Shinhan.svg',
    color: '#0046FF',
  },
  카카오뱅크: {
    image: '/images/Card/KaKao.svg',
    color: '#FFE600',
  },
  현대카드: {
    image: '/images/Card/Hyundai.svg',
    color: '#000000',
  },
  우리카드: {
    image: '/images/Card/Woori.svg',
    color: '#007BC8',
  },
  롯데카드: {
    image: '/images/Card/Lotte.svg',
    color: '#ED1C24',
  },
  하나카드: {
    image: '/images/Card/Hana.svg',
    color: '#009490',
  },
  국민카드: {
    image: '/images/Card/KB.svg',
    color: '#6A6056',
  },
} as const;

export type CardBrand = keyof typeof CARD_BRAND;
