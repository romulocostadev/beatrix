import React from 'react';

import { PlusOutlined } from '@ant-design/icons';

import {
  LayoutSider1,
  MenuGroup1,
  Layers,
  TreeItem,
  Frame1,
  IconOutlinedCaretDown,
  Icon2,
  IconOutlinedFolderOpen,
  ItemWrapper,
  Database,
  ButtonsButton,
  TreeItem1,
  Frame11,
  IconOutlinedCaretDown1,
  Icon3,
  IconOutlinedFolderOpen1,
  ItemWrapper1,
  Database1,
  ButtonsButton7,
  Content,
  IconOutlinedPlus,
  TreeItem2,
  Frame12,
  IconOutlinedCaretDown2,
  Icon4,
  IconOutlinedFolderOpen2,
  ItemWrapper2,
  Database2,
  ButtonsButton8,
  Content1,
  IconOutlinedPlus1,
} from './styles';

const LayoutSiderPage = () => {
  return (
    <LayoutSider1>
      <MenuGroup1>
        <Layers>
          <TreeItem>
            <Frame1>
              <IconOutlinedCaretDown />
            </Frame1>
            <Icon2>
              <IconOutlinedFolderOpen />
            </Icon2>
            <ItemWrapper>
              <Database>SunChemical</Database>
            </ItemWrapper>
            <ButtonsButton type="text" icon={<PlusOutlined />} />
          </TreeItem>
          <TreeItem1>
            <Frame11>
              <IconOutlinedCaretDown1 />
            </Frame11>
            <Icon3>
              <IconOutlinedFolderOpen1 />
            </Icon3>
            <ItemWrapper1>
              <Database1>Database</Database1>
            </ItemWrapper1>
            <ButtonsButton7>
              <Content>
                <IconOutlinedPlus />
              </Content>
            </ButtonsButton7>
          </TreeItem1>
          <TreeItem2>
            <Frame12>
              <IconOutlinedCaretDown2 />
            </Frame12>
            <Icon4>
              <IconOutlinedFolderOpen2 />
            </Icon4>
            <ItemWrapper2>
              <Database2>Services</Database2>
            </ItemWrapper2>
            <ButtonsButton8>
              <Content1>
                <IconOutlinedPlus1 />
              </Content1>
            </ButtonsButton8>
          </TreeItem2>
        </Layers>
      </MenuGroup1>
    </LayoutSider1>
  );
};

export default LayoutSiderPage;
