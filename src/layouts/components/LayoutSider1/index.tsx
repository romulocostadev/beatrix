import React from 'react';

import {PlusOutlined} from '@ant-design/icons' 


import {
LayoutSider,
MenuGroup,
Layers,
TreeItem,
Frame1,
IconOutlinedCaretDown,
Icon,
IconOutlinedFolderOpen,
ItemWrapper,
Database,
ButtonsButton,
TreeItem1,
Frame11,
IconOutlinedCaretDown1,
Icon1,
IconOutlinedFolderOpen1,
ItemWrapper1,
Database1,
ButtonsButton1,
Content,
IconOutlinedPlus,
Button,
TreeItem2,
Frame12,
IconOutlinedCaretDown2,
Icon2,
IconOutlinedFolderOpen2,
ItemWrapper2,
Database2,
ButtonsButton2,
Content1,
IconOutlinedPlus1,
Button,
} from './styles';

const LayoutSiderPage = () => {









return (
        <LayoutSider    >
  <MenuGroup    >
    <Layers    >
      <TreeItem    >
        <Frame1    >
          <IconOutlinedCaretDown    >
          </IconOutlinedCaretDown>
        </Frame1>
        <Icon    >
          <IconOutlinedFolderOpen    >
          </IconOutlinedFolderOpen>
        </Icon>
        <ItemWrapper    >
          <Database >
            SunChemical
          </Database>
        </ItemWrapper>
        <ButtonsButton  
          type='text'
          icon={<PlusOutlined/>}
          >
        </ButtonsButton>
      </TreeItem>
      <TreeItem1    >
        <Frame11    >
          <IconOutlinedCaretDown1    >
          </IconOutlinedCaretDown1>
        </Frame11>
        <Icon1    >
          <IconOutlinedFolderOpen1    >
          </IconOutlinedFolderOpen1>
        </Icon1>
        <ItemWrapper1    >
          <Database1 >
            Database
          </Database1>
        </ItemWrapper1>
        <ButtonsButton1    >
          <Content    >
            <IconOutlinedPlus    >
            </IconOutlinedPlus>
          </Content>
        </ButtonsButton1>
      </TreeItem1>
      <TreeItem2    >
        <Frame12    >
          <IconOutlinedCaretDown2    >
          </IconOutlinedCaretDown2>
        </Frame12>
        <Icon2    >
          <IconOutlinedFolderOpen2    >
          </IconOutlinedFolderOpen2>
        </Icon2>
        <ItemWrapper2    >
          <Database2 >
            Services
          </Database2>
        </ItemWrapper2>
        <ButtonsButton2    >
          <Content1    >
            <IconOutlinedPlus1    >
            </IconOutlinedPlus1>
          </Content1>
        </ButtonsButton2>
      </TreeItem2>
    </Layers>
  </MenuGroup>
</LayoutSider>

    )

}

export default LayoutSiderPage
