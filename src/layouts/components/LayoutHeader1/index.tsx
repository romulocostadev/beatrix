import React from 'react';

import { MenuOutlined } from '@ant-design/icons';
import GenericCodeButton from '../../../components/Button';

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
    <LayoutHeader>
      <Header>
        <Wrapper>
          <GenericCodeButton type="text" icon={<MenuOutlined />} />
          <InkControlSymbol />
        </Wrapper>
        <Actions>
          <ButtonsButton1 type="text">PT</ButtonsButton1>
          <GenericCodeButton type="text" icon={<MenuOutlined />} />
          <Frame43>
            <Avatar>
              <Rectangle3 />
              <IconOutlinedUser />
            </Avatar>
            <InstanceComponentdropdowntrigger>
              <Dropdown>Nome do Usuário</Dropdown>
              <VectorComponenticonoutlineddir />
            </InstanceComponentdropdowntrigger>
          </Frame43>
        </Actions>
      </Header>
    </LayoutHeader>
  );
};

export default LayoutHeaderPage;
