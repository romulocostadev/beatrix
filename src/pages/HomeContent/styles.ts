import styled from 'styled-components';

import { Tabs } from 'antd';
import GenericText from '../../components/Text';

export const HomeContent = styled.div`
  left: 0px;
  top: 1177px;
  position: static;
  height: 100%;
  width: 1920px;
  box-sizing: border-box;
  background-color: #ffffff;
`;
export const PageHeader = styled.div`
  left: 0px;
  top: 0px;
  position: inherit;
  height: 86px;
  width: 1920px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  row-gap: 24px;
  column-gap: 24px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px 360px 24px 360px;
  padding-top: 24px;
  padding-left: 360px;
  padding-bottom: 24px;
  padding-right: 360px;
  background-color: #ffffff;
`;
export const Home = styled(GenericText)`
  font-size: 30px;
  margin: 0px;
  left: 360px;
  top: 24px;
  width: 82px;
`;

export const TabGroup = styled(Tabs)`
  width: 1920px;
`;

export const TabGroupPane = styled(Tabs.TabPane)``;
