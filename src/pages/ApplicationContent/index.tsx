import React from 'react';



import {
ApplicationContent,
Title,
WelcometoBeatrix,
Seehowtogetstarted,
Cards,
LessonsCard,
CardVector,
VectorComponentundrawyoutube,
Lessons,
LearntousetheBeatrix,
ButtonsButton,
FigmaCard,
CardVector1,
VectorComponentundrawprototyp,
ConnectFigma,
TextComponentconnect,
ButtonsButton1,
InputCard,
CardVector2,
Undrawdatainputfxv21,
Datainput,
TextComponentstart,
ButtonsButton2,
} from './styles';

const ApplicationContentPage = () => {









return (
        <ApplicationContent  layout='vertical'  >
  <Title  layout='vertical'  >
    <WelcometoBeatrix >
      Welcome to Beatrix!
    </WelcometoBeatrix>
    <Seehowtogetstarted >
      See how to get started...
    </Seehowtogetstarted>
  </Title>
  <Cards  layout='vertical'  >
    <LessonsCard  layout='vertical'  >
      <CardVector  layout='vertical'  >
        <VectorComponentundrawyoutube  layout='vertical'  >
        </VectorComponentundrawyoutube>
      </CardVector>
      <Lessons >
        Lessons
      </Lessons>
      <LearntousetheBeatrix >
        Learn to use the Beatrix.
      </LearntousetheBeatrix>
      <ButtonsButton  
        type='primary'
        >
          Start learning
      </ButtonsButton>
    </LessonsCard>
    <FigmaCard  layout='vertical'  >
      <CardVector1  layout='vertical'  >
        <VectorComponentundrawprototyp  layout='vertical'  >
        </VectorComponentundrawprototyp>
      </CardVector1>
      <ConnectFigma >
        Connect Figma
      </ConnectFigma>
      <TextComponentconnect >
        Connect to your Figma account.
      </TextComponentconnect>
      <ButtonsButton1  
        type='primary'
        >
          Connect to Figma
      </ButtonsButton1>
    </FigmaCard>
    <InputCard  layout='vertical'  >
      <CardVector2  layout='vertical'  >
        <Undrawdatainputfxv21  layout='vertical'  >
        </Undrawdatainputfxv21>
      </CardVector2>
      <Datainput >
        Data input
      </Datainput>
      <TextComponentstart >
        Start a solution by entering data.
      </TextComponentstart>
      <ButtonsButton2  
        type='primary'
        >
          Get started
      </ButtonsButton2>
    </InputCard>
  </Cards>
</ApplicationContent>

    )

}

export default ApplicationContentPage
