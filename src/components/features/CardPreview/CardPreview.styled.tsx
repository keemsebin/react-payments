import styled from '@emotion/styled';

import { colors } from '@/styles/global';

export const StyledCardContainer = styled.div`
  position: relative;
  background-color: ${colors.GY3};
  border-radius: 12px;
  width: 350px;
  height: 200px;
  box-shadow: 3px 3px 10px ${colors.GY2};
`;

export const StyledICCheapContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;
  width: 60px;
  height: 40px;
  background-color: ${colors.gold};
  border-radius: 6px;
`;

export const StyledCardTypeIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 12px;
  width: 60px;
  height: 40px;
`;
