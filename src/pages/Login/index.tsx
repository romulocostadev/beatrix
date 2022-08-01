import React from 'react';

import { Typography } from 'antd';


import {
Login,
Login1,
Login2,
Content3,
Title1,
Welcomeback,
ViceriForm,
InputFormItem,
InputBasic,
InputFormItem1,
InputPassword,
Actions,
ButtonsButton1,
ButtonsButton2,
CreateaAccount,
Content4,
Logo5,
Unmaped14840549090881,
Text,
Comecreatethefuture,
TextComponentjoin,
Actions1,
ButtonsButton5,
Content5,
Button8,
} from './styles';

const LoginPage = () => {









return (
        <Login    >
  <Login1    >
    <Login2    >
      <Content3    >
        <Title1    >
          <Welcomeback >
            Welcome back!
          </Welcomeback>
        </Title1>
        <ViceriForm  layout='vertical'  >
          <InputFormItem
          label={<Typography.Text ellipsis>E-mail</Typography.Text>}
          name='email'
          >
            <InputBasic
        placeholder='E-mail'
            />
          </InputFormItem>
          <InputFormItem1
          label={<Typography.Text ellipsis>Password</Typography.Text>}
          name='password'
          >
            <InputPassword
        placeholder='Password'
            />
          </InputFormItem1>
        </ViceriForm>
        <Actions    >
          <ButtonsButton1  
            type='link'
            >
              Recovery Password
          </ButtonsButton1>
          <ButtonsButton2  
            type='primary'
            >
              Login
          </ButtonsButton2>
        </Actions>
      </Content3>
    </Login2>
    <CreateaAccount    >
      <Content4    >
        <Logo5    >
          <Unmaped14840549090881/>
        </Logo5>
        <Text    >
          <Comecreatethefuture >
            Come create the future!
          </Comecreatethefuture>
          <TextComponentjoin >
            Join us creating your account.
          </TextComponentjoin>
        </Text>
        <Actions1    >
          <ButtonsButton5    >
            <Content5    >
              <Button8 >
                Create
              </Button8>
            </Content5>
          </ButtonsButton5>
        </Actions1>
      </Content4>
    </CreateaAccount>
  </Login1>
</Login>

    )

}

export default LoginPage
