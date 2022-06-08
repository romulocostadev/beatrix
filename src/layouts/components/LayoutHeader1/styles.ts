import styled from 'styled-components';

import Vector1484054909088Image from './assets/1531_133338.png';

export const LayoutHeader = styled.div`
  height: 48px;
  width: 1920px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
export const Header = styled.div`
  height: 48px;
  width: 1920px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  padding-right: 16px;
`;
export const Beatrix = styled.div`
  flex-direction: column;
  height: 48px;
  width: 116px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 10px;
  column-gap: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 16px 16px 16px;
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
`;
export const Vector1484054909088 = styled.div`
  left: 16px;
  top: 16px;
  position: static;
  height: 16px;
  width: 84px;
  box-sizing: border-box;
  background: url(${Vector1484054909088Image});
  background-repeat: no-repeat;
`;
