import React from 'react';



import {
DataCanvas,
CardCreatingAStructure,
VectorFrame,
CreatingAStructureVector,
CreatingaStructure,
Asolutionneedsainstance,
HandleNewInstance,
MenuGroup1,
CollapseProperties,
CollapseItem,
CollapseHead,
IconOutlinedDown,
Properties,
IconOutlinedMenu,
Divider,
CollapseBody,
Input3,
InputBasic,
Prefix,
Input,
Divider,
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
    <HandleNewInstance  
      type='primary'
      >
        New instance
    </HandleNewInstance>
  </CardCreatingAStructure>
  <MenuGroup1    >
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
        <Divider/>
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
        <Divider/>
      </CollapseItem>
    </CollapseProperties>
  </MenuGroup1>
</DataCanvas>

    )

}

export default DataCanvasPage
import React from 'react';



import {
DataCanvas1,
MenuGroup2,
CollapseProperties1,
CollapseItem1,
CollapseHead1,
IconOutlinedDown1,
Properties1,
IconOutlinedMenu1,
Divider,
CollapseBody1,
Input4,
InputBasic1,
Prefix1,
Input1,
Dropdown1,
Prefix2,
Input2,
VectorComponenticonoutlineddir,
Divider,
AInstanceNeedsADatabase,
VectorFrame1,
DataVector,
AInstanceNeedsaDatabase,
TextComponentdont,
HandleNewDatabase,
} from './styles';

const DataCanvasPage = () => {









return (
        <DataCanvas1    >
  <MenuGroup2    >
    <CollapseProperties1    >
      <CollapseItem1    >
        <CollapseHead1    >
          <IconOutlinedDown1    >
          </IconOutlinedDown1>
          <Properties1 >
            Properties
          </Properties1>
          <IconOutlinedMenu1    >
          </IconOutlinedMenu1>
        </CollapseHead1>
        <Divider/>
        <CollapseBody1    >
          <Input4    >
            <InputBasic1    >
              <Prefix1 >
                Name:
              </Prefix1>
              <Input1 >
                PostgreSQL
              </Input1>
            </InputBasic1>
          </Input4>
          <Dropdown1    >
            <Prefix2 >
              Type:
            </Prefix2>
            <Input2 >
              PostgreSQL
            </Input2>
            <VectorComponenticonoutlineddir    >
            </VectorComponenticonoutlineddir>
          </Dropdown1>
        </CollapseBody1>
        <Divider/>
      </CollapseItem1>
    </CollapseProperties1>
  </MenuGroup2>
  <AInstanceNeedsADatabase    >
    <VectorFrame1    >
      <DataVector    >
      </DataVector>
    </VectorFrame1>
    <AInstanceNeedsaDatabase >
      A Instance Needs a Database
    </AInstanceNeedsaDatabase>
    <TextComponentdont >
      Don't worry, we're almost there.
    </TextComponentdont>
    <HandleNewDatabase  
      type='primary'
      >
        New Database
    </HandleNewDatabase>
  </AInstanceNeedsADatabase>
</DataCanvas1>

    )

}

export default DataCanvasPage
