import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
import GenericInput from '../../components/Input';

import {
  RecoveryPassword,
  Login4,
  Content8,
  Title2,
  Recoveringyourpassword,
  ViceriForm2,
  InputFormItem,
  Actions4,
  ButtonsButton1,
  CreateaAccount2,
  Content9,
  Logo2,
  Vector14840549090882,
  Text3,
  TextComponentdid,
  Wererelievedtohearthat,
  Actions5,
  ButtonsButton6,
  Content10,
  Button4,
} from './styles';

const RecoveryPasswordPage = () => {
  let navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <RecoveryPassword>
      <Login4>
        <Content8>
          <Title2>
            <Recoveringyourpassword>
              Recovering your password
            </Recoveringyourpassword>
          </Title2>
          <ViceriForm2 onClick={navigateToLogin}>
            <InputFormItem
              label={<Typography.Text ellipsis>E-mail</Typography.Text>}
              name="email"
            >
              <GenericInput placeholder="E-mail" />
            </InputFormItem>
          </ViceriForm2>
          <Actions4>
            <ButtonsButton1 type="primary">Recovery</ButtonsButton1>
          </Actions4>
        </Content8>
      </Login4>
      <CreateaAccount2>
        <Content9>
          <Logo2>
            <Vector14840549090882 />
          </Logo2>
          <Text3>
            <TextComponentdid>Did you remember your password?</TextComponentdid>
            <Wererelievedtohearthat>
              We're relieved to hear that.
            </Wererelievedtohearthat>
          </Text3>
          <Actions5>
            <ButtonsButton6>
              <Content10>
                <Button4>Login</Button4>
              </Content10>
            </ButtonsButton6>
          </Actions5>
        </Content9>
      </CreateaAccount2>
    </RecoveryPassword>
  );
};

export default RecoveryPasswordPage;
