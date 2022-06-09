import styled from 'styled-components'

import {Tabs} from 'antd'

export const HomeContent = styled.div`
left: 0px;
top: 1387px;
position: static;
height: 100%;
width: 1920px;
box-sizing: border-box;
  background-color: #FFFFFF;
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
row-gap: 24.0px;;
column-gap: 24.0px;;
justify-content: flex-start;
align-items: flex-start;
  padding: 24.0px 360.0px 24.0px 360.0px;
    padding-top: 24.0px;
    padding-left: 360.0px;
    padding-bottom: 24.0px;
    padding-right: 360.0px;
  background-color: #FFFFFF;
`;
import GenericText from '../../components/Text'
export const Home = styled(GenericText)`
      font-size: 30px;
      color: rgba(0, 0, 0, 0.85) ;
      margin: 0px;
    left: 360px;
    top: 24px;
    width: 82px;
`;

export const TabGroup = styled(Tabs).attrs({
  tabBarStyle: {
    padding:'0px 360.0px 0px 360.0px',
  }})`
  width: 1920px;
`;

export const TabGroupPane = styled((Tabs.TabPane))`
`;

