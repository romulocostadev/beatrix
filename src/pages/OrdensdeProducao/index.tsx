import React from 'react';

import {MoreOutlined} from '@ant-design/icons' 


import {
OrdensdeProducao2,
PageHeader,
Header1,
OrdensdeProducao,
Quintafeira10032022,
Buttons,
Body,
ContentRow1Column01,
ActionsButton,
Content1Row1Column71,
TagStatus,
Default1,
Content2Row2Column01,
ActionsButton1,
Content3Row2Column71,
TagStatus1,
Processing1,
Content4Row3Column01,
ActionsButton2,
Content5Row3Column71,
TagStatus2,
Success1,
Content6Row4Column01,
ActionsButton3,
Content7Row4Column71,
TagStatus3,
Warning1,
Content8Row5Column01,
ActionsButton4,
Content9Row5Column71,
TagStatus4,
Error1,
ColumnTableGroup,
TableGroup,
} from './styles';

const OrdensdeProducaoPage = () => {




const dataSourceTableGroup = [
{
key: '0',
title150: 
[
  <ContentRow1Column01    >
    <ActionsButton  
      type='text'
      icon={<MoreOutlined/>}
      size='small'
      >
    </ActionsButton>
  </ContentRow1Column01>
,
],
title161: 
'1014612193',
title172: 
'179719 - João da Silva',
title183: 
'91330712 242259A:PRETO 2',
title194: 
'Tinta',
title205: 
'Make & Pack',
title216: 
'Pesagem',
status27: 
[
  <Content1Row1Column71    >
    <TagStatus    >
      <Default1 >
        Não iniciado
      </Default1>
    </TagStatus>
  </Content1Row1Column71>
,
],
},
{
key: '1',
title150: 
[
  <Content2Row2Column01    >
    <ActionsButton1  
      type='text'
      icon={<MoreOutlined/>}
      size='small'
      >
    </ActionsButton1>
  </Content2Row2Column01>
,
],
title161: 
'1014612194',
title172: 
'773720 - Mario Barbosa',
title183: 
'91330712 242259A:PRETO 2',
title194: 
'Verniz',
title205: 
'Make & Pack',
title216: 
'Homogenização',
status27: 
[
  <Content3Row2Column71    >
    <TagStatus1    >
      <Processing1 >
        Em andamento
      </Processing1>
    </TagStatus1>
  </Content3Row2Column71>
,
],
},
{
key: '2',
title150: 
[
  <Content4Row3Column01    >
    <ActionsButton2  
      type='text'
      icon={<MoreOutlined/>}
      size='small'
      >
    </ActionsButton2>
  </Content4Row3Column01>
,
],
title161: 
'1014612195',
title172: 
'379721 - John Carlos',
title183: 
'91330712 242259A:PRETO 2',
title194: 
'Solvente',
title205: 
'Make & Pack',
title216: 
'CQ',
status27: 
[
  <Content5Row3Column71    >
    <TagStatus2    >
      <Success1 >
        Concluída
      </Success1>
    </TagStatus2>
  </Content5Row3Column71>
,
],
},
{
key: '3',
title150: 
[
  <Content6Row4Column01    >
    <ActionsButton3  
      type='text'
      icon={<MoreOutlined/>}
      size='small'
      >
    </ActionsButton3>
  </Content6Row4Column01>
,
],
title161: 
'1014612196',
title172: 
'879722 - Flávio Augusto',
title183: 
'91330712 242259A:PRETO 2',
title194: 
'Tinta',
title205: 
'Make & Pack',
title216: 
'Envase',
status27: 
[
  <Content7Row4Column71    >
    <TagStatus3    >
      <Warning1 >
        Atenção
      </Warning1>
    </TagStatus3>
  </Content7Row4Column71>
,
],
},
{
key: '4',
title150: 
[
  <Content8Row5Column01    >
    <ActionsButton4  
      type='text'
      icon={<MoreOutlined/>}
      size='small'
      >
    </ActionsButton4>
  </Content8Row5Column01>
,
],
title161: 
'1014612197',
title172: 
'179719 - João da Silva',
title183: 
'91330712 242259A:PRETO 2',
title194: 
'Verniz',
title205: 
'Make & Pack',
title216: 
'Rotulagem',
status27: 
[
  <Content9Row5Column71    >
    <TagStatus4    >
      <Error1 >
        Cancelada
      </Error1>
    </TagStatus4>
  </Content9Row5Column71>
,
],
},
]





return (
        <OrdensdeProducao2    >
  <PageHeader    >
    <Header1    >
      <OrdensdeProducao >
        Ordens de Produção
      </OrdensdeProducao>
      <Quintafeira10032022 >
        Quinta-feira, 10/03/2022
      </Quintafeira10032022>
      <Buttons    >
      </Buttons>
    </Header1>
  </PageHeader>
  <Body    >
    <TableGroup dataSource={dataSourceTableGroup}> 
<ColumnTableGroup title='Ação' dataIndex='title150' key='title150' align='center'width='65px' /> 
<ColumnTableGroup title='OP' dataIndex='title161' key='title161' align='left'filters={[{text: '1014612193', value: '1014612193'},{text: '1014612194', value: '1014612194'},{text: '1014612195', value: '1014612195'},{text: '1014612196', value: '1014612196'},{text: '1014612197', value: '1014612197'},]}width='221.5712890625px'onFilter={(value, record: any) => record.title161.indexOf(value) === 0 } /> 
<ColumnTableGroup title='Cliente' dataIndex='title172' key='title172' align='left'filters={[{text: '179719 - João da Silva', value: '179719 - João da Silva'},{text: '773720 - Mario Barbosa', value: '773720 - Mario Barbosa'},{text: '379721 - John Carlos', value: '379721 - John Carlos'},{text: '879722 - Flávio Augusto', value: '879722 - Flávio Augusto'},]}width='221.5712890625px'onFilter={(value, record: any) => record.title172.indexOf(value) === 0 } /> 
<ColumnTableGroup title='Produto' dataIndex='title183' key='title183' align='left'filters={[{text: '91330712 242259A:PRETO 2', value: '91330712 242259A:PRETO 2'},]}width='221.5712890625px'onFilter={(value, record: any) => record.title183.indexOf(value) === 0 } /> 
<ColumnTableGroup title='Categoria' dataIndex='title194' key='title194' align='left'filters={[{text: 'Tinta', value: 'Tinta'},{text: 'Verniz', value: 'Verniz'},{text: 'Solvente', value: 'Solvente'},]}width='221.5712890625px'onFilter={(value, record: any) => record.title194.indexOf(value) === 0 } /> 
<ColumnTableGroup title='Tipo' dataIndex='title205' key='title205' align='left'width='221.5712890625px' /> 
<ColumnTableGroup title='Etapa' dataIndex='title216' key='title216' align='left'width='221.5712890625px' /> 
<ColumnTableGroup title='Status' dataIndex='status27' key='status27' align='left'width='221.5712890625px' /> 
    </TableGroup>
  </Body>
</OrdensdeProducao2>

    )

}

export default OrdensdeProducaoPage
