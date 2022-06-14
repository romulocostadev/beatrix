import React from 'react';

import { useNavigate, useNavigate } from 'react-router-dom';
import { Typography, Typography } from 'antd';

import GenericInput from '../../components/Input';

import {
  Login,
  Login1,
  Content,
  Title,
  Welcomeback,
  ViceriForm,
  InputFormItem,
  InputFormItem1,
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
  Login2,
  Login3,
  Content5,
  Title1,
  TextComponentcreating,
  ViceriForm1,
  InputFormItem,
  InputFormItem3,
  InputFormItem4,
  Actions2,
  ButtonsButton,
  CreateaAccount1,
  Content6,
  Logo1,
  Vector14840549090881,
  Text2,
  Alreadyhaveanaccount,
  Wearewaitingforyou,
  Actions3,
  ButtonsButton5,
  Content7,
  Button3,
} from './styles';

const { Title: Title1 } = Typography;
const { Title: Title2 } = Typography;
const { Title: Title3 } = Typography;
const { Title: Title4 } = Typography;

const teste = () => {
  console.log('ttes');
};
const LoginPage = () => {
  let navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <Login>
      <Login1>
        <Content>
          <Title>
            <Welcomeback>Welcome back!</Welcomeback>
          </Title>
          <ViceriForm layout="vertical" onClick={navigateToLogin}>
            <InputFormItem
              label={<Typography.Text ellipsis>E-mail</Typography.Text>}
              name="email"
            >
              <GenericInput placeholder="E-mail" />
            </InputFormItem>
            <InputFormItem1
              label={<Typography.Text ellipsis>Password</Typography.Text>}
              name="password"
            >
              <GenericInput placeholder="E-mail" />
            </InputFormItem1>
          </ViceriForm>
          <Actions>
            <ButtonsButton2>
              <Content1>
                <Button>Recovery Password</Button>
              </Content1>
            </ButtonsButton2>
            <ButtonsButton3>
              <Content2>
                <Button1>Login</Button1>
              </Content2>
            </ButtonsButton3>
          </Actions>
        </Content>
      </Login1>
      <CreateaAccount>
        <Content3>
          <div>oi</div>
          <Logo>
            <Vector1484054909088 />
          </Logo>
          <Text1>
            <Comecreatethefuture>Come create the future!</Comecreatethefuture>
            <TextComponentjoin>
              Join us creating your account.
            </TextComponentjoin>
          </Text1>
          <Actions1>
            <ButtonsButton4>
              <Content4>
                <Button2>Create</Button2>
              </Content4>
            </ButtonsButton4>
          </Actions1>
        </Content3>
      </CreateaAccount>
    </Login>
  );
};

export default LoginPage;

const LoginPage = () => {
  let navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <Login2>
      <Login3>
        <Content5>
          <Title1>
            <TextComponentcreating>
              Creating an account to the future!
            </TextComponentcreating>
          </Title1>
          <ViceriForm1 onClick={navigateToLogin}>
            <InputFormItem
              label={<Typography.Text ellipsis>E-mail</Typography.Text>}
              name="email"
            >
              <GenericInput placeholder="E-mail" />
            </InputFormItem>
            <InputFormItem3
              label={<Typography.Text ellipsis>Password</Typography.Text>}
              name="password"
            >
              <GenericInput placeholder="E-mail" />
            </InputFormItem3>
            <InputFormItem4
              label={
                <Typography.Text ellipsis>Confirm password</Typography.Text>
              }
              name="confirmPassword"
            >
              <GenericInput placeholder="E-mail" />
            </InputFormItem4>
          </ViceriForm1>
          <Actions2>
            <ButtonsButton type="primary">Create</ButtonsButton>
          </Actions2>
        </Content5>
      </Login3>
      <CreateaAccount1>
        <Content6>
          <Logo1>
            <Vector14840549090881 />
          </Logo1>
          <Text2>
            <Alreadyhaveanaccount>
              Already have an account?
            </Alreadyhaveanaccount>
            <Wearewaitingforyou>We are waiting for you.</Wearewaitingforyou>
          </Text2>
          <Actions3>
            <ButtonsButton5>
              <Content7>
                <Button3>Login</Button3>
              </Content7>
            </ButtonsButton5>
          </Actions3>
        </Content6>
      </CreateaAccount1>
    </Login2>
  );
};

export default LoginPage;
