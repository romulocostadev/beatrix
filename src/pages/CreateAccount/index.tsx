import React from 'react';

import {useNavigate} from 'react-router-dom';
import GenericFormItem from '../../components/FormItem' 
import { Typography } from 'antd';
import GenericInput from '../../components/Input' 


import {
CreateAccount,
Login2,
Content5,
Title,
TextComponentcreating,
ViceriForm1,
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

const CreateAccountPage = () => {




let navigate = useNavigate()

const navigateToLogin = () => {navigate('/login')};




return (
        <CreateAccount    >
  <Login2    >
    <Content5    >
      <Title    >
        <TextComponentcreating >
          Creating an account to the future!
        </TextComponentcreating>
      </Title>
      <ViceriForm1   onClick = {navigateToLogin} >
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
      </ViceriForm1>
      <Actions2    >
        <ButtonsButton  
          type='primary'
          >
            Create
        </ButtonsButton>
      </Actions2>
    </Content5>
  </Login2>
  <CreateaAccount1    >
    <Content6    >
      <Logo1    >
        <Vector14840549090881    >
        </Vector14840549090881>
      </Logo1>
      <Text2    >
        <Alreadyhaveanaccount >
          Already have an account?
        </Alreadyhaveanaccount>
        <Wearewaitingforyou >
          We are waiting for you.
        </Wearewaitingforyou>
      </Text2>
      <Actions3    >
        <ButtonsButton5    >
          <Content7    >
            <Button3 >
              Login
            </Button3>
          </Content7>
        </ButtonsButton5>
      </Actions3>
    </Content6>
  </CreateaAccount1>
</CreateAccount>

    )

}

export default CreateAccountPage
