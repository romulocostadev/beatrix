import React from 'react';

import {
  Content011,
  LessonsCard,
  Lessons1,
  Lessons,
  Bar,
  Logo,
  Frame9,
  ButtonsButton,
  Stage,
  Creatingdata,
  Howtocreateadataworkflow,
  ButtonsButton1,
  Solutions1,
  Title,
  Solutions,
  ButtonsButton2,
  Sorter,
  Sortby,
  Name,
  Lastmodified,
  MySolutions,
  Solution02,
  Logo1,
  Logo2,
  Veiling,
  Apr1820221356,
  Solution03,
  Logo3,
  Logo4,
  Iris,
  Apr1720221356,
} from './styles';

const Content01Page = () => {
  return (
    <Content011>
      <LessonsCard>
        <Lessons1>
          <Lessons>Lessons</Lessons>
          <Bar>
            <Logo>
              <Frame9 />
            </Logo>
          </Bar>
          <ButtonsButton type="link">Start lesson</ButtonsButton>
        </Lessons1>
        <Stage>
          <Creatingdata>Creating data</Creatingdata>
          <Howtocreateadataworkflow>
            How to create a data workflow.
          </Howtocreateadataworkflow>
        </Stage>
        <ButtonsButton1 type="link">View all lessons</ButtonsButton1>
      </LessonsCard>
      <Solutions1>
        <Title>
          <Solutions>Solutions</Solutions>
          <ButtonsButton2 type="primary">New solution</ButtonsButton2>
        </Title>
        <Sorter>
          <Sortby>Sort by</Sortby>
          <Name>name</Name>
          <Lastmodified>last modified</Lastmodified>
        </Sorter>
        <MySolutions>
          <Solution02>
            <Logo1 />
            <Logo2>
              <Veiling>Veiling</Veiling>
              <Apr1820221356>Apr 18, 2022, 13:56</Apr1820221356>
            </Logo2>
          </Solution02>
          <Solution03>
            <Logo3 />
            <Logo4>
              <Iris>Iris</Iris>
              <Apr1720221356>Apr 17, 2022, 13:56</Apr1720221356>
            </Logo4>
          </Solution03>
        </MySolutions>
      </Solutions1>
    </Content011>
  );
};

export default Content01Page;
