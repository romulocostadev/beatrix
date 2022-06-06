import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
import GenericInput from '../../components/Input';

import {
  CreateAccount,
  Login2,
  Content2,
  Title1,
  TextComponentcreating,
  ViceriForm1,
  InputFormItem2,
  InputFormItem3,
  InputFormItem4,
  Actions2,
  ButtonsButton1,
  CreateaAccount1,
  Content3,
  Logo1,
  Vector14840549090881,
  Text2,
  Alreadyhaveanaccount,
  Wearewaitingforyou,
  Actions3,
  ButtonsButton2,
} from './styles';

const CreateAccountPage = () => {
  let navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <CreateAccount>
      <Login2>
        <Content2>
          <Title1>
            <TextComponentcreating>
              Creating an account to the future!
            </TextComponentcreating>
          </Title1>
          <ViceriForm1 onClick={navigateToLogin}>
            <InputFormItem2
              label={<Typography.Text ellipsis>E-mail</Typography.Text>}
              name="inputformitem2"
            >
              <GenericInput placeholder="E-mail" />
            </InputFormItem2>
            <InputFormItem3
              label={<Typography.Text ellipsis>Password:</Typography.Text>}
              name="inputformitem3"
            >
              <GenericInput placeholder="E-mail" />
            </InputFormItem3>
            <InputFormItem4
              label={
                <Typography.Text ellipsis>Confirm password:</Typography.Text>
              }
              name="inputformitem4"
            >
              <GenericInput placeholder="E-mail" />
            </InputFormItem4>
          </ViceriForm1>
          <Actions2>
            <ButtonsButton1 type="primary">Create</ButtonsButton1>
          </Actions2>
        </Content2>
      </Login2>
      <CreateaAccount1>
        <Content3>
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
            <ButtonsButton2 type="primary">Login</ButtonsButton2>
          </Actions3>
        </Content3>
      </CreateaAccount1>
    </CreateAccount>
  );
};

export default CreateAccountPage;
