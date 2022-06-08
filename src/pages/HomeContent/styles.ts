import styled from 'styled-components'

import Frame9Image from './assets/1531_149139.png' 
import Logo1Image from './assets/1531_149155.png' 
import Logo3Image from './assets/1531_149160.png' 

export const HomeContent = styled.div`
flex-direction: column;
height: 100%;
width: 1920px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
  background-color: #FFFFFF;
`;
export const PageHeader = styled.div`
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
      color: #000000;
      margin: 0px;
    left: 360px;
    top: 24px;
    width: 82px;
`;

export const TabGroup = styled.div`
flex-direction: column;
height: 100%;
width: 1920px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
`;
export const TabItemGroup = styled.div`
height: 56px;
width: 1920px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 32.0px;;
column-gap: 32.0px;;
justify-content: flex-start;
align-items: flex-start;
    padding-left: 360.0px;
    padding-right: 360.0px;
  background-color: #FFFFFF;
`;
export const TabItemBasic = styled.div`
flex-direction: column;
height: 56px;
width: 60px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
`;
export const ContentWrapper = styled.div`
height: 54px;
width: 60px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 10.0px;;
column-gap: 10.0px;;
justify-content: flex-start;
align-items: center;
        padding-top: 16.0px;
        padding-bottom: 16.0px;
`;
export const Tabtitle = styled(GenericText)`
          font-weight: 700;
          font-size: 14px;
          margin: 0px;
        top: 16px;
`;

export const Border = styled.div`
left: 0px;
top: 54px;
position: static;
height: 2px;
width: 60px;
box-sizing: border-box;
  background-color: #7447F9;
`;
export const TabItemBasic1 = styled.div`
flex-direction: column;
height: 56px;
width: 66px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
`;
export const ContentWrapper1 = styled.div`
height: 54px;
width: 66px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 10.0px;;
column-gap: 10.0px;;
justify-content: flex-start;
align-items: center;
      padding-top: 16.0px;
      padding-bottom: 16.0px;
`;
export const Tabtitle1 = styled(GenericText)`
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        margin: 0px;
      top: 16px;
      width: 67px;
`;

export const Border1 = styled.div`
left: 0px;
top: 54px;
position: static;
height: 2px;
width: 66px;
box-sizing: border-box;
  background-color: #7447F9;
`;
export const ContentItem = styled.div`
flex-direction: column;
height: 100%;
width: 1920px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
  background-color: rgba(115, 70, 248, 0.019999999552965164);
`;
export const Content01 = styled.div`
flex-direction: column;
height: 100%;
width: 1920px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 48.0px;;
column-gap: 48.0px;;
justify-content: flex-start;
align-items: center;
  padding: 24.0px 360.0px 24.0px 360.0px;
    padding-top: 24.0px;
    padding-left: 360.0px;
    padding-bottom: 24.0px;
    padding-right: 360.0px;
  background-color: #FFFFFF;
`;
export const LessonsCard = styled.div`
flex-direction: column;
height: 134px;
width: 1202px;
display: flex;
flex-direction: column;
border: 1px solid #000000;
box-sizing: border-box;
row-gap: 16.0px;;
column-gap: 16.0px;;
justify-content: flex-start;
align-items: flex-start;
border-radius: 8px;
    padding: 16.0px 16.0px 16.0px 16.0px;
      padding-top: 16.0px;
      padding-left: 16.0px;
      padding-bottom: 16.0px;
      padding-right: 16.0px;
  background-color: #FFFFFF;
`;
export const Lessons2 = styled.div`
height: 24px;
width: 1168px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 16.0px;;
column-gap: 16.0px;;
justify-content: flex-start;
align-items: center;
`;
export const Lessons = styled(GenericText)`
          margin: 0px;
`;

export const Bar = styled.div`
flex-direction: column;
height: 16px;
width: 1000px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
`;
export const Logo = styled.div`
left: 0px;
top: 0px;
position: static;
height: 16px;
width: 1000px;
box-sizing: border-box;
border-radius: 12px;
  background-color: #F6F6F6;
`;
export const Frame9 = styled.div`
left: 0px;
top: 0px;
position: absolute;
left: 0px;
top: 0px;
position: absolute;
height: 16px;
width: 478px;
box-sizing: border-box;
border-radius: 12px;
  background-color: #7447F9;
  background: url(${Frame9Image});
  background-repeat: no-repeat;
`;
export const ButtonsButton3 = styled.div`
flex-direction: column;
height: 22px;
width: 76px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
border-radius: 2px;
`;
export const Content = styled.div`
height: 22px;
width: 76px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
`;
export const Button = styled(GenericText)`
        font-size: 14px;
        margin: 0px;
      width: 77px;
`;

export const Stage = styled.div`
height: 22px;
width: 1168px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 24.0px;;
column-gap: 24.0px;;
justify-content: flex-start;
align-items: flex-end;
`;
export const Creatingdata = styled(GenericText)`
        font-size: 14px;
        color: #000000;
        margin: 0px;
      width: 86px;
`;

export const Howtocreateadataworkflow = styled(GenericText)`
      font-weight: 400;
      font-size: 12px;
      color: #000000;
      margin: 0px;
    left: 109px;
    top: 2px;
    width: 1060px;
`;

export const ButtonsButton4 = styled.div`
flex-direction: column;
height: 22px;
width: 100px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
border-radius: 2px;
`;
export const Content1 = styled.div`
height: 22px;
width: 100px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
`;
export const Button1 = styled(GenericText)`
      font-weight: 400;
      font-size: 14px;
      margin: 0px;
    width: 101px;
`;

export const Solutions1 = styled.div`
flex-direction: column;
height: 348px;
width: 1200px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 24.0px;;
column-gap: 24.0px;;
justify-content: flex-start;
align-items: flex-start;
`;
export const Title = styled.div`
justify-content: space-between;
height: 38px;
width: 1200px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: space-between;
align-items: center;
`;
export const Solutions = styled(GenericText)`
        font-size: 30px;
        color: #000000;
        margin: 0px;
      width: 128px;
`;

export const ButtonsButton5 = styled.div`
flex-direction: column;
height: 32px;
width: 114px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
border-radius: 2px;
    padding: 5.0px 16.0px 5.0px 16.0px;
      padding-top: 5.0px;
      padding-left: 16.0px;
      padding-bottom: 5.0px;
      padding-right: 16.0px;
  background-color: #7447F9;
`;
export const Content2 = styled.div`
height: 22px;
width: 82px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
`;
export const Button2 = styled(GenericText)`
        font-size: 14px;
        color: #FFFFFF;
        margin: 0px;
      width: 83px;
`;

export const Sorter = styled.div`
height: 22px;
width: 1200px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 16.0px;;
column-gap: 16.0px;;
justify-content: flex-start;
align-items: flex-start;
`;
export const Sortby = styled(GenericText)`
      font-weight: 400;
      font-size: 14px;
      color: #000000;
      margin: 0px;
    width: 45px;
`;

export const Name = styled(GenericText)`
    font-weight: 400;
    font-size: 14px;
    margin: 0px;
  left: 60px;
  width: 37px;
`;

export const Lastmodified = styled(GenericText)`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  margin: 0px;
left: 112px;
width: 82px;
`;

export const MySolutions = styled.div`
height: 240px;
width: 1200px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 24.0px;;
column-gap: 24.0px;;
justify-content: flex-start;
align-items: flex-start;
`;
export const Solution02 = styled.div`
flex-direction: column;
height: 242px;
width: 226px;
display: flex;
flex-direction: column;
border: 1px solid #000000;
box-sizing: border-box;
row-gap: 16.0px;;
column-gap: 16.0px;;
justify-content: flex-start;
align-items: flex-start;
border-radius: 8px;
  padding: 12.0px 12.0px 12.0px 12.0px;
    padding-top: 12.0px;
    padding-left: 12.0px;
    padding-bottom: 12.0px;
    padding-right: 12.0px;
  background-color: #FFFFFF;
`;
export const Logo1 = styled.div`
height: 100px;
width: 200px;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
border-radius: 8px;
  background-color: #F6F6F6;
  background: url(${Logo1Image});
  background-repeat: no-repeat;
`;
export const Logo2 = styled.div`
flex-direction: column;
height: 100px;
width: 200px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
`;
export const Veiling = styled(GenericText)`
      font-size: 14px;
      color: #000000;
      margin: 0px;
    width: 201px;
`;

export const Apr1820221356 = styled(GenericText)`
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    margin: 0px;
  top: 22px;
  width: 201px;
`;

export const Solution03 = styled.div`
flex-direction: column;
height: 242px;
width: 226px;
display: flex;
flex-direction: column;
border: 1px solid #000000;
box-sizing: border-box;
row-gap: 16.0px;;
column-gap: 16.0px;;
justify-content: flex-start;
align-items: flex-start;
border-radius: 8px;
padding: 12.0px 12.0px 12.0px 12.0px;
  padding-top: 12.0px;
  padding-left: 12.0px;
  padding-bottom: 12.0px;
  padding-right: 12.0px;
  background-color: #FFFFFF;
`;
export const Logo3 = styled.div`
height: 100px;
width: 200px;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
border-radius: 8px;
  background-color: #F6F6F6;
  background: url(${Logo3Image});
  background-repeat: no-repeat;
`;
export const Logo4 = styled.div`
flex-direction: column;
height: 100px;
width: 200px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
`;
export const Iris = styled(GenericText)`
    font-size: 14px;
    color: #000000;
    margin: 0px;
  width: 201px;
`;

export const Apr1720221356 = styled(GenericText)`
  font-weight: 400;
  font-size: 12px;
  color: #000000;
  margin: 0px;
top: 22px;
width: 201px;
`;

