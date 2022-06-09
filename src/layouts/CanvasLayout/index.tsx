import React from 'react';

import { Outlet } from 'react-router-dom';
import LayoutSider1 from '../components/LayoutSider1';

import { CanvasLayout, Content, Body, Sider } from './styles';

const CanvasLayoutPage = () => {
  return (
    <CanvasLayout>
      <Sider>
        <LayoutSider1 />
      </Sider>
      <Body>
        <Content>
          <Outlet />
        </Content>
      </Body>
    </CanvasLayout>
  );
};

export default CanvasLayoutPage;
