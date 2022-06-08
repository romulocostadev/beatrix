import React from 'react';

import {
  LayoutHeader1,
  Header1,
  Beatrix1,
  Vector14840549090881,
  Divider,
} from './styles';

const LayoutHeaderPage = () => {
  return (
    <LayoutHeader1 layout="vertical">
      <Header1 layout="vertical">
        <Beatrix1 layout="vertical">
          <Vector14840549090881 layout="vertical" />
        </Beatrix1>
      </Header1>
      <Divider />
    </LayoutHeader1>
  );
};

export default LayoutHeaderPage;
