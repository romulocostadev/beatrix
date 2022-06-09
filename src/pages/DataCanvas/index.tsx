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
    <DataCanvas>
      <CardCreatingAStructure>
        <VectorFrame>
          <CreatingAStructureVector />
        </VectorFrame>
        <CreatingaStructure>Creating a Structure</CreatingaStructure>
        <Asolutionneedsainstance>
          A solution needs a instance.
        </Asolutionneedsainstance>
        <HandleNewInstance type="primary">New instance</HandleNewInstance>
      </CardCreatingAStructure>
      <MenuGroup1>
        <CollapseProperties>
          <CollapseItem>
            <CollapseHead>
              <IconOutlinedDown />
              <Properties>Properties</Properties>
              <IconOutlinedMenu />
            </CollapseHead>
            <Divider />
            <CollapseBody>
              <Input3>
                <InputBasic>
                  <Prefix>Name:</Prefix>
                  <Input>SunChemical</Input>
                </InputBasic>
              </Input3>
            </CollapseBody>
            <Divider />
          </CollapseItem>
        </CollapseProperties>
      </MenuGroup1>
    </DataCanvas>
  );
};

export default DataCanvasPage;
