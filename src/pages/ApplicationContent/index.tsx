import React from 'react';

import GenericCodeButton from '../../components/Button' 


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
FigmaCard,
CardVector1,
VectorComponentundrawprototyp,
ConnectFigma,
TextComponentconnect,
ButtonsButton2,
InputCard,
CardVector2,
Undrawdatainputfxv21,
Datainput,
TextComponentstart,
ButtonsButton3,
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
      <GenericCodeButton  
        type='primary'
        >
          Start learning
      </GenericCodeButton>
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
      <ButtonsButton2  
        type='primary'
        >
          Connect to Figma
      </ButtonsButton2>
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
      <ButtonsButton3  
        type='primary'
        >
          Get started
      </ButtonsButton3>
    </InputCard>
  </Cards>
</ApplicationContent>

    )

}

export default ApplicationContentPage
