import React from 'react';

import {useNavigate} from 'react-router-dom';
import GenericFormItem from '../../components/FormItem' 
import { Typography } from 'antd';
import GenericInput from '../../components/Input' 


import {
Login,
Login1,
Content,
Title,
Welcomeback,
ViceriForm,
Actions,
ButtonsButton2,
Content1,
Button,
ButtonsButton3,
Content2,
Button1,
CreateaAccount,
Content3,
Logo,
Vector1484054909088,
Text1,
Comecreatethefuture,
TextComponentjoin,
Actions1,
ButtonsButton4,
Content4,
Button2,
} from './styles';

const LoginPage = () => {




let navigate = useNavigate()

const navigateToLogin = () => {navigate('/login')};




return (
        <Login    >
  <Login1    >
    <Content    >
      <Title    >
        <Welcomeback >
          Welcome back!
        </Welcomeback>
      </Title>
      <ViceriForm  layout='vertical' onClick = {navigateToLogin} >
        <GenericFormItem
        label={<Typography.Text ellipsis>E-mail</Typography.Text>}
        name='email'
        >
          <GenericInput
        placeholder='E-mail'
          />
        </GenericFormItem>
        <GenericFormItem
        label={<Typography.Text ellipsis>E-mail</Typography.Text>}
        name='email'
        >
          <GenericInput
        placeholder='E-mail'
          />
        </GenericFormItem>
        <GenericFormItem
        label={<Typography.Text ellipsis>E-mail</Typography.Text>}
        name='email'
        >
          <GenericInput
        placeholder='E-mail'
          />
        </GenericFormItem>
      </ViceriForm>
      <Actions    >
        <ButtonsButton2    >
          <Content1    >
            <Button >
              Recovery Password
            </Button>
          </Content1>
        </ButtonsButton2>
        <ButtonsButton3    >
          <Content2    >
            <Button1 >
              Login
            </Button1>
          </Content2>
        </ButtonsButton3>
      </Actions>
    </Content>
  </Login1>
  <CreateaAccount    >
    <Content3    >
      <Logo    >
        <Vector1484054909088    >
        </Vector1484054909088>
      </Logo>
      <Text1    >
        <Comecreatethefuture >
          Come create the future!
        </Comecreatethefuture>
        <TextComponentjoin >
          Join us creating your account.
        </TextComponentjoin>
      </Text1>
      <Actions1    >
        <ButtonsButton4    >
          <Content4    >
            <Button2 >
              Create
            </Button2>
          </Content4>
        </ButtonsButton4>
      </Actions1>
    </Content3>
  </CreateaAccount>
</Login>

    )

}

export default LoginPage
