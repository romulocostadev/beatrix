import styled from 'styled-components'

import IconOutlinedCaretDownImage from './assets/I1702_130359_918_110418.png' 
import IconOutlinedFolderOpenImage from './assets/I1702_130359_969_114298.png' 
import GenericCodeButton from '../../../components/Button'
import IconOutlinedCaretDown1Image from './assets/I1702_130360_918_110452.png' 
import IconOutlinedFolderOpen1Image from './assets/I1702_130360_969_114294.png' 
import IconOutlinedPlusImage from './assets/I1702_130360_991_120139_125_68244.png' 
import IconOutlinedCaretDown2Image from './assets/I1702_130361_918_110452.png' 
import IconOutlinedFolderOpen2Image from './assets/I1702_130361_969_114294.png' 
import IconOutlinedPlus1Image from './assets/I1702_130361_991_120139_125_68244.png' 

export const LayoutSider = styled.div`
height: 100%;
width: 240px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
`;
export const MenuGroup = styled.div`
flex-direction: column;
height: 100%;
width: 240px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
  background-color: #FFFFFF;
`;
export const Layers = styled.div`
flex-direction: column;
height: 100%;
width: 240px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: center;
`;
export const TreeItem = styled.div`
height: 32px;
width: 240px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
      padding: 2.0px 8.0px 2.0px 8.0px;
        padding-top: 2.0px;
        padding-left: 8.0px;
        padding-bottom: 2.0px;
        padding-right: 8.0px;
  background-color: #F7F1FF;
`;
export const Frame1 = styled.div`
flex-direction: column;
height: 28px;
width: 12px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 4.0px;;
column-gap: 4.0px;;
justify-content: center;
align-items: center;
`;
export const IconOutlinedCaretDown = styled.div`
left: 0px;
top: 8px;
position: static;
height: 12px;
width: 12px;
box-sizing: border-box;
  background: url(${IconOutlinedCaretDownImage});
  background-repeat: no-repeat;
`;
export const Icon = styled.div`
height: 28px;
width: 16px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 10.0px;;
column-gap: 10.0px;;
justify-content: flex-start;
align-items: center;
`;
export const IconOutlinedFolderOpen = styled.div`
left: 0px;
top: 6px;
position: static;
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedFolderOpenImage});
  background-repeat: no-repeat;
`;
export const ItemWrapper = styled.div`
height: 20px;
width: 156px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 10.0px;;
column-gap: 10.0px;;
justify-content: flex-start;
align-items: flex-start;
      padding-right: 4.0px;
`;
import GenericText from '../../../components/Text'
export const Database = styled(GenericText)`
        font-weight: 500;
        color: #7447F9;
        margin: 0px;
      width: 153px;
`;

export const ButtonsButton = styled(GenericCodeButton)`
  left: 216px;
  top: 8px;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    height: 16px;
`;

export const TreeItem1 = styled.div`
height: 32px;
width: 240px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
    padding: 2.0px 8.0px 2.0px 24.0px;
      padding-top: 2.0px;
      padding-left: 24.0px;
      padding-bottom: 2.0px;
      padding-right: 8.0px;
`;
export const Frame11 = styled.div`
flex-direction: column;
height: 28px;
width: 12px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 4.0px;;
column-gap: 4.0px;;
justify-content: center;
align-items: center;
`;
export const IconOutlinedCaretDown1 = styled.div`
left: 0px;
top: 8px;
position: static;
height: 12px;
width: 12px;
box-sizing: border-box;
  background: url(${IconOutlinedCaretDown1Image});
  background-repeat: no-repeat;
`;
export const Icon1 = styled.div`
height: 28px;
width: 16px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 10.0px;;
column-gap: 10.0px;;
justify-content: flex-start;
align-items: center;
`;
export const IconOutlinedFolderOpen1 = styled.div`
left: 0px;
top: 6px;
position: static;
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedFolderOpen1Image});
  background-repeat: no-repeat;
`;
export const ItemWrapper1 = styled.div`
height: 20px;
width: 140px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 10.0px;;
column-gap: 10.0px;;
justify-content: flex-start;
align-items: flex-start;
    padding-right: 4.0px;
`;
export const Database1 = styled(GenericText)`
      margin: 0px;
`;

export const ButtonsButton1 = styled.div`
flex-direction: column;
height: 16px;
width: 16px;
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
height: 16px;
width: 16px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
`;
export const IconOutlinedPlus = styled.div`
left: 0px;
top: 0px;
position: static;
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedPlusImage});
  background-repeat: no-repeat;
`;
export const TreeItem2 = styled.div`
height: 32px;
width: 240px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
  padding: 2.0px 8.0px 2.0px 24.0px;
    padding-top: 2.0px;
    padding-left: 24.0px;
    padding-bottom: 2.0px;
    padding-right: 8.0px;
`;
export const Frame12 = styled.div`
flex-direction: column;
height: 28px;
width: 12px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 4.0px;;
column-gap: 4.0px;;
justify-content: center;
align-items: center;
`;
export const IconOutlinedCaretDown2 = styled.div`
left: 0px;
top: 8px;
position: static;
height: 12px;
width: 12px;
box-sizing: border-box;
  background: url(${IconOutlinedCaretDown2Image});
  background-repeat: no-repeat;
`;
export const Icon2 = styled.div`
height: 28px;
width: 16px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 10.0px;;
column-gap: 10.0px;;
justify-content: flex-start;
align-items: center;
`;
export const IconOutlinedFolderOpen2 = styled.div`
left: 0px;
top: 6px;
position: static;
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedFolderOpen2Image});
  background-repeat: no-repeat;
`;
export const ItemWrapper2 = styled.div`
height: 20px;
width: 140px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 10.0px;;
column-gap: 10.0px;;
justify-content: flex-start;
align-items: flex-start;
  padding-right: 4.0px;
`;
export const Database2 = styled(GenericText)`
    margin: 0px;
`;

export const ButtonsButton2 = styled.div`
flex-direction: column;
height: 16px;
width: 16px;
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
height: 16px;
width: 16px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
`;
export const IconOutlinedPlus1 = styled.div`
left: 0px;
top: 0px;
position: static;
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedPlus1Image});
  background-repeat: no-repeat;
`;
