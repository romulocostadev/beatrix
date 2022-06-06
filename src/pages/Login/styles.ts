import styled from 'styled-components'

import {Form} from 'antd' 
import GenericInputPassword from '../../components/InputPassword'
import GenericCodeButton from '../../components/Button'
import Vector1484054909088Image from './assets/1521_130435.png' 

export const Login = styled.div`
height: 500px;
width: 800px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.07999999821186066)  , 32px 32px 32px 0px rgba(0, 0, 0, 0.07999999821186066)  ,  64px 64px 64px 0px rgba(0, 0, 0, 0.05000000074505806)    ;
`;
export const Login1 = styled.div`
height: 500px;
width: 400px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: center;
align-items: center;
  padding: 48.0px 48.0px 48.0px 48.0px;
    padding-top: 48.0px;
    padding-left: 48.0px;
    padding-bottom: 48.0px;
    padding-right: 48.0px;
  background-color: #FFFFFF;
`;
export const Content = styled.div`
flex-direction: column;
height: 188px;
width: 304px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: center;
`;
export const Title = styled.div`
height: 24px;
width: 304px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: center;
align-items: flex-start;
`;
import GenericText from '../../components/Text'
export const Welcomeback = styled(GenericText)`
          font-weight: 500;
          font-size: 16px;
          color: #000000;
          margin: 0px;
        left: 97.5px;
        width: 110px;
`;

export const ViceriForm = styled(Form)`
height: 116px;
width: 304px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: flex-start;
    cursor: pointer;
`;
export const InputFormItem = styled((Form.Item))`
        width: 304px;
      left: 0px;
      top: 0px;
      position: static;
`;

export const InputLabelVertical = styled.div`
height: 22px;
width: 304px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 4.0px;;
column-gap: 4.0px;;
justify-content: flex-start;
align-items: center;
`;
export const TextComponent = styled(GenericText)`
          margin: 0px;
`;

export const InputLabel = styled(GenericText)`
        font-size: 12px;
        color: #000000;
        margin: 0px;
      left: 11px;
      top: 1px;
      width: 37px;
`;

export const InputFormItem1 = styled((Form.Item))`
      width: 304px;
    left: 0px;
    top: 62px;
    position: static;
`;

export const InputLabelVertical1 = styled.div`
height: 22px;
width: 304px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 4.0px;;
column-gap: 4.0px;;
justify-content: flex-start;
align-items: center;
`;
export const TextComponent1 = styled(GenericText)`
        margin: 0px;
`;

export const InputLabel1 = styled(GenericText)`
      font-size: 12px;
      color: #000000;
      margin: 0px;
    left: 11px;
    top: 1px;
    width: 57px;
`;

export const Password = styled((GenericInputPassword))`
top: 22px;
`;

export const Actions = styled.div`
justify-content: space-between;
height: 32px;
width: 304px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: space-between;
align-items: flex-start;
`;
export const HandleRecoveryPassword = styled(GenericCodeButton)`
      width: 123px;
      height: 22px;
      border-radius: 2px;
      height: 22px;
`;

export const HandleLogin = styled(GenericCodeButton)`
  left: 237px;
    width: 67px;
    height: 32px;
    border-radius: 2px;
    height: 32px;
`;

export const CreateaAccount = styled.div`
height: 500px;
width: 400px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: center;
align-items: flex-end;
padding: 48.0px 48.0px 158.0px 48.0px;
  padding-top: 48.0px;
  padding-left: 48.0px;
  padding-bottom: 158.0px;
  padding-right: 48.0px;
  background-color: #F7F1FF;
`;
export const Content1 = styled.div`
flex-direction: column;
height: 182px;
width: 304px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 40.0px;;
column-gap: 40.0px;;
justify-content: flex-start;
align-items: flex-start;
`;
export const Logo = styled.div`
flex-direction: column;
height: 24px;
width: 126px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
`;
export const Vector1484054909088 = styled.div`
left: 0px;
top: 0px;
position: static;
height: 24px;
width: 126px;
box-sizing: border-box;
  background: url(${Vector1484054909088Image});
  background-repeat: no-repeat;
`;
export const Text1 = styled.div`
flex-direction: column;
height: 46px;
width: 304px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
`;
export const Comecreatethefuture = styled(GenericText)`
      font-weight: 500;
      font-size: 16px;
      color: #000000;
      margin: 0px;
    width: 305px;
`;

export const TextComponentjoin = styled(GenericText)`
    color: #000000;
    margin: 0px;
  top: 24px;
  width: 189px;
`;

export const Actions1 = styled.div`
flex-direction: column;
height: 32px;
width: 304px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 8.0px;;
column-gap: 8.0px;;
justify-content: flex-start;
align-items: flex-start;
`;
export const ButtonsButton = styled(GenericCodeButton)`
  left: 0px;
  top: 0px;
  position: static;
    width: 73px;
    height: 32px;
    border-radius: 2px;
    height: 32px;
`;

