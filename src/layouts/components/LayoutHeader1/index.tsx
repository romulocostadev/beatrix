import React from 'react';

import GenericCodeButton from '../../../components/Button' 
import {MenuOutlined} from '@ant-design/icons' 


import {
LayoutHeader,
Header,
Wrapper,
InkControlSymbol,
Actions,
ButtonsButton1,
Frame43,
Avatar,
Rectangle3,
IconOutlinedUser,
InstanceComponentdropdowntrigger,
Dropdown,
VectorComponenticonoutlineddir,
} from './styles';

const LayoutHeaderPage = () => {









return (
        <LayoutHeader    >
  <Header    >
    <Wrapper    >
      <GenericCodeButton  
        type='text'
        icon={<MenuOutlined/>}
        >
      </GenericCodeButton>
      <InkControlSymbol    >
      </InkControlSymbol>
    </Wrapper>
    <Actions    >
      <ButtonsButton1  
        type='text'
        >
          PT
      </ButtonsButton1>
      <GenericCodeButton  
        type='text'
        icon={<MenuOutlined/>}
        >
      </GenericCodeButton>
      <Frame43    >
        <Avatar    >
          <Rectangle3    >
          </Rectangle3>
          <IconOutlinedUser    >
          </IconOutlinedUser>
        </Avatar>
        <InstanceComponentdropdowntrigger    >
          <Dropdown >
            Nome do Usuário
          </Dropdown>
          <VectorComponenticonoutlineddir    >
          </VectorComponenticonoutlineddir>
        </InstanceComponentdropdowntrigger>
      </Frame43>
    </Actions>
  </Header>
</LayoutHeader>

    )

}

export default LayoutHeaderPage
