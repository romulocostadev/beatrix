import React from 'react';



import {
Content011,
LessonsCard1,
Lessons2,
Lessons1,
Bar,
Logo,
Frame9,
ButtonsButton3,
Stage,
Creatingdata,
Howtocreateadataworkflow,
ButtonsButton4,
Solutions1,
Title1,
Solutions,
ButtonsButton5,
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
        <Content011  layout='vertical'  >
  <LessonsCard1  layout='vertical'  >
    <Lessons2  layout='vertical'  >
      <Lessons1 >
        Lessons
      </Lessons1>
      <Bar  layout='vertical'  >
        <Logo  layout='vertical'  >
          <Frame9  layout='vertical'  >
          </Frame9>
        </Logo>
      </Bar>
      <ButtonsButton3  
        type='link'
        >
          Start lesson
      </ButtonsButton3>
    </Lessons2>
    <Stage  layout='vertical'  >
      <Creatingdata >
        Creating data
      </Creatingdata>
      <Howtocreateadataworkflow >
        How to create a data workflow.
      </Howtocreateadataworkflow>
    </Stage>
    <ButtonsButton4  
      type='link'
      >
        View all lessons
    </ButtonsButton4>
  </LessonsCard1>
  <Solutions1  layout='vertical'  >
    <Title1  layout='vertical'  >
      <Solutions >
        Solutions
      </Solutions>
      <ButtonsButton5  
        type='primary'
        >
          New solution
      </ButtonsButton5>
    </Title1>
    <Sorter  layout='vertical'  >
      <Sortby >
        Sort by
      </Sortby>
      <Name >
        name
      </Name>
      <Lastmodified >
        last modified
      </Lastmodified>
    </Sorter>
    <MySolutions  layout='vertical'  >
      <Solution02  layout='vertical'  >
        <Logo1  layout='vertical'  >
        </Logo1>
        <Logo2  layout='vertical'  >
          <Veiling >
            Veiling
          </Veiling>
          <Apr1820221356 >
            Apr 18, 2022, 13:56
          </Apr1820221356>
        </Logo2>
      </Solution02>
      <Solution03  layout='vertical'  >
        <Logo3  layout='vertical'  >
        </Logo3>
        <Logo4  layout='vertical'  >
          <Iris >
            Iris
          </Iris>
          <Apr1720221356 >
            Apr 17, 2022, 13:56
          </Apr1720221356>
        </Logo4>
      </Solution03>
    </MySolutions>
  </Solutions1>
</Content011>

    )

}

export default Content01Page
