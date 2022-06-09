import React from 'react';

import {
  HomeContent,
  PageHeader,
  Home,
  TabGroupPane,
  TabGroup,
} from './styles';

const HomeContentPage = () => {
  return (
    <HomeContent>
      <PageHeader>
        <Home>Home</Home>
      </PageHeader>
      <TabGroup tabPosition="top" type="line" size="large" />
    </HomeContent>
  );
};

export default HomeContentPage;
