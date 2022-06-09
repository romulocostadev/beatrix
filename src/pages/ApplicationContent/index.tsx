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
        <ApplicationContent    >
  <Title    >
    <WelcometoBeatrix >
      Welcome to Beatrix!
    </WelcometoBeatrix>
    <Seehowtogetstarted >
      See how to get started...
    </Seehowtogetstarted>
  </Title>
  <Cards    >
    <LessonsCard    >
      <CardVector    >
        <VectorComponentundrawyoutube    >
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
    <FigmaCard    >
      <CardVector1    >
        <VectorComponentundrawprototyp    >
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
    <InputCard    >
      <CardVector2    >
        <Undrawdatainputfxv21    >
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
