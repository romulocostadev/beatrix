import React from 'react';

import GenericCodeButton from '../../components/Button' 


import {
DataCanvas,
CardCreatingAStructure,
VectorFrame,
CreatingAStructureVector,
CreatingaStructure,
Asolutionneedsainstance,
MenuGroup2,
CollapseProperties,
CollapseItem,
CollapseHead,
IconOutlinedDown,
Properties,
IconOutlinedMenu,
Divider2,
CollapseBody,
Input3,
InputBasic,
Prefix,
Input,
Divider3,
} from './styles';

const DataCanvasPage = () => {









return (
        <DataCanvas    >
  <CardCreatingAStructure    >
    <VectorFrame    >
      <CreatingAStructureVector    >
      </CreatingAStructureVector>
    </VectorFrame>
    <CreatingaStructure >
      Creating a Structure
    </CreatingaStructure>
    <Asolutionneedsainstance >
      A solution needs a instance.
    </Asolutionneedsainstance>
    <GenericCodeButton  
      type='primary'
      >
        Start learning
    </GenericCodeButton>
  </CardCreatingAStructure>
  <MenuGroup2    >
    <CollapseProperties    >
      <CollapseItem    >
        <CollapseHead    >
          <IconOutlinedDown    >
          </IconOutlinedDown>
          <Properties >
            Properties
          </Properties>
          <IconOutlinedMenu    >
          </IconOutlinedMenu>
        </CollapseHead>
        <Divider2    >
        </Divider2>
        <CollapseBody    >
          <Input3    >
            <InputBasic    >
              <Prefix >
                Name:
              </Prefix>
              <Input >
                SunChemical
              </Input>
            </InputBasic>
          </Input3>
        </CollapseBody>
        <Divider3    >
        </Divider3>
      </CollapseItem>
    </CollapseProperties>
  </MenuGroup2>
</DataCanvas>

    )

}

export default DataCanvasPage
