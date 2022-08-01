import styled from 'styled-components'

import {Form} from 'antd' 
import GenericFormItem from '../../components/FormItem'
import GenericInput from '../../components/Input'
import GenericInputPassword from '../../components/InputPassword'
import GenericCodeButton from '../../components/Button'
import Unmaped14840549090881Image from '../../assets/841_109061.svg' 

export const Login = styled.div`
width: 90rem;
height: 56.25rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  background-color: #FFFFFF;
`;
export const Login1 = styled.div`
width: 50rem;
height: 31.25rem;
display: flex;
  box-shadow: 0.5rem 0.5rem 0.5rem  rgba(0, 0, 0, 0.08) , 2rem 2rem 2rem  rgba(0, 0, 0, 0.08) ,  4rem 4rem 4rem  rgba(0, 0, 0, 0.05)   ;
`;
export const Login2 = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
    padding: 3rem;
  background-color: #FFFFFF;
`;
export const Content3 = styled.div`
width: 100%;
display: inline-flex;
flex-direction: column;
gap: 0.5rem;
align-items: center;
`;
export const Title1 = styled.div`
width: 100%;
display: inline-flex;
justify-content: center;
`;
import GenericText from '../../components/Text'
export const Welcomeback = styled(GenericText)`
            font-size: 1rem;
`;

export const ViceriForm = styled(Form)`
width: 100%;
display: flex;
flex-direction: column;
gap: 0.5rem;
`;
export const InputFormItem = styled(GenericFormItem)`
`;

export const InputLabelVertical = styled.div`
width: 100%;
display: inline-flex;
gap: 0.25rem;
align-items: center;
`;
export const InputLabel = styled(GenericText)`
            font-weight: 400;
            font-size: 0.75rem;
`;

export const InputBasic = styled((GenericInput))`
width: 100%;
`;

export const InputFormItem1 = styled(GenericFormItem)`
`;

export const InputLabelVertical1 = styled.div`
width: 100%;
display: inline-flex;
gap: 0.25rem;
align-items: center;
`;
export const InputLabel1 = styled(GenericText)`
          font-weight: 400;
          font-size: 0.75rem;
`;

export const InputPassword = styled((GenericInputPassword))`
width: 100%;
`;

export const Actions = styled.div`
justify-content: space-between;
width: 100%;
display: inline-flex;
justify-content: space-between;
`;
export const ButtonsButton1 = styled(GenericCodeButton)`
        width: 7.69rem;
        height: 1.38rem;
        border-radius: 0.12rem;
`;

export const ButtonsButton2 = styled(GenericCodeButton)`
      width: 4.19rem;
      height: 2rem;
      border-radius: 0.12rem;
`;

export const CreateaAccount = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: flex-end;
  padding: 3rem 3rem 9.88rem 3rem;
  background-color: #F7F1FF;
`;
export const Content4 = styled.div`
width: 100%;
display: inline-flex;
flex-direction: column;
gap: 2.5rem;
`;
export const Logo5 = styled.div`
display: inline-flex;
flex-direction: column;
`;
export const Unmaped14840549090881 = styled.img.attrs({
src: Unmaped14840549090881Image,
heigth: 'auto',
width: '100%'
})`
max-width: 126.46px;
`;

export const Text = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;
export const Comecreatethefuture = styled(GenericText)`
        font-size: 1rem;
flex: 1;
`;

export const TextComponentjoin = styled(GenericText)`
      font-weight: 400;
      font-size: 0.88rem;
`;

export const Actions1 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 0.5rem;
`;
export const ButtonsButton5 = styled.div`
display: inline-flex;
flex-direction: column;
gap: 0.5rem;
align-items: center;
border-radius: 0.12rem;
    padding: 0.31rem 1rem 0.31rem 1rem;
  background-color: #7447F9;
`;
export const Content5 = styled.div`
display: inline-flex;
gap: 0.5rem;
align-items: center;
`;
export const Button8 = styled(GenericText)`
        font-weight: 400;
        font-size: 0.88rem;
        color: #FFFFFF;
`;

