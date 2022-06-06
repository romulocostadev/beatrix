import React from 'react';

import { Typography } from 'antd';

import {
  RecoveryPassword,
  Login3,
  Content4,
  Title2,
  Recoveringyourpassword,
  ViceriForm2,
  InputFormItem5,
  Email2,
  Actions4,
  ButtonsButton3,
  CreateaAccount2,
  Content5,
  Logo2,
  Vector14840549090882,
  Text3,
  TextComponentdid,
  Wererelievedtohearthat,
  Actions5,
  ButtonsButton4,
} from './styles';

const RecoveryPasswordPage = () => {
  return (
    <RecoveryPassword>
      <Login3>
        <Content4>
          <Title2>
            <Recoveringyourpassword>
              Recovering your password
            </Recoveringyourpassword>
          </Title2>
          <ViceriForm2>
            <InputFormItem5
              label={<Typography.Text ellipsis>E-mail</Typography.Text>}
              name="email"
            >
              <Email2 placeholder="E-mail" />
            </InputFormItem5>
          </ViceriForm2>
          <Actions4>
            <ButtonsButton3 type="primary">Recovery</ButtonsButton3>
          </Actions4>
        </Content4>
      </Login3>
      <CreateaAccount2>
        <Content5>
          <Logo2>
            <Vector14840549090882 />
          </Logo2>
          <Text3>
            <TextComponentdid>Did you remember your password?</TextComponentdid>
            <Wererelievedtohearthat>
<<<<<<< HEAD
              Were relieved to hear that.
=======
              We're relieved to hear that.
>>>>>>> design2code-generated-code
            </Wererelievedtohearthat>
          </Text3>
          <Actions5>
            <ButtonsButton4 type="primary">Login</ButtonsButton4>
          </Actions5>
        </Content5>
      </CreateaAccount2>
    </RecoveryPassword>
  );
};

export default RecoveryPasswordPage;
