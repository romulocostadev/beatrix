import React from 'react';

import { Typography } from 'antd';
import GenericInput from '../../components/Input' 
import GenericCodeButton from '../../components/Button' 


import {
Login,
Login1,
Content,
Title,
Welcomeback,
ViceriForm,
InputFormItem,
InputFormItem1,
Password,
Actions,
HandleRecoveryPassword,
HandleLogin,
CreateaAccount,
Content1,
Logo,
Vector1484054909088,
Text1,
Comecreatethefuture,
TextComponentjoin,
Actions1,
} from './styles';

const LoginPage = () => {









return (
        <Login    >
  <Login1    >
    <Content    >
      <Title    >
        <Welcomeback >
          Welcome back!
        </Welcomeback>
      </Title>
      <ViceriForm    >
        <InputFormItem
        label={<Typography.Text ellipsis>E-mail</Typography.Text>}
        name='inputformitem'
        rules={[
        { required: true, message: 'Campo obrigatório'},
        ]}
        >
          <GenericInput
        placeholder='E-mail'
          />
        </InputFormItem>
        <InputFormItem1
        label={<Typography.Text ellipsis>Password</Typography.Text>}
        name='inputformitem1'
        rules={[
        { required: true, message: 'Campo obrigatório'},
        ]}
        >
          <Password
        placeholder='Password'
          />
        </InputFormItem1>
      </ViceriForm>
      <Actions    >
        <HandleRecoveryPassword 
          type='link'
          >
            Recovery Password
        </HandleRecoveryPassword>
        <HandleLogin 
          type='primary'
          >
            Login
        </HandleLogin>
      </Actions>
    </Content>
  </Login1>
  <CreateaAccount    >
    <Content1    >
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
        <GenericCodeButton 
          type='primary'
          >
            Create
        </GenericCodeButton>
      </Actions1>
    </Content1>
  </CreateaAccount>
</Login>

    )

}

export default LoginPage
