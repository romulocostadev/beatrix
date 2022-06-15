import React from 'react';

import {
  DetalhesOrdemdeProducao,
  PageHeader1,
  Header2,
  IconOutlinedArrowLeft,
  OrdemdeProducao,
  Text10146112193,
  Body1,
  Card01,
  Title22,
  Geral,
  Body2,
  Row1,
  Field,
  Produto,
  TextComponent91330712,
  Row2,
  Field1,
  OrdemdeFabricacao,
  Text3SCUQB00E7,
  Row3,
  Field2,
  Quantidade,
  Text1000Kg,
  Field3,
  QuantidadePedidaCliente,
  Text500Kg,
  DividerHorizontal,
  Line,
  Row4,
  Field4,
  PedidodoCliente,
  Text17688038,
  Field5,
  NomedoCliente,
  Text179719KLABINSA,
  Row5,
  Field6,
  DatadeColocacaodoPedido,
  Text07022022114017BRT,
  Field7,
  DatadeConfirmacao,
  Text31012022,
  Field8,
  DatadeEnvioSolicitada,
  Text11022022,
  Field9,
  DataFinaldaProducao,
  Text14022022,
  Card02,
  Title23,
  Materiais,
  Body3,
  Content10Row4Column11,
  Content11Row4Column21,
  Content12Row4Column51,
  ColumnMateriaisTable,
  MateriaisTable,
  Card021,
  Title24,
  Processo,
  Body4,
  InstanceComponentstepsgroupnavig,
  InstanceComponentstepsitemnaviga,
  Wrapper1,
  StepsItemProgressIcon,
  Text2,
  Content,
  Inprogress,
  VectorComponentnavigationsteps,
  StepsItemArrow,
  Rectangle1,
  VectorComponentnavigationsteps1,
  InstanceComponentstepsitemnaviga1,
  Wrapper2,
  StepsItemProgressIcon1,
  Text3,
  Content1,
  Waiting,
  VectorComponentnavigationsteps2,
  StepsItemArrow1,
  Rectangle11,
  VectorComponentnavigationsteps3,
  InstanceComponentstepsitemnaviga2,
  Wrapper3,
  StepsItemProgressIcon2,
  Text31,
  Content2,
  Waiting1,
  VectorComponentnavigationsteps4,
  StepsItemArrow2,
  Rectangle12,
  VectorComponentnavigationsteps5,
  InstanceComponentstepsitemnaviga3,
  Wrapper4,
  StepsItemProgressIcon3,
  Text32,
  Content3,
  Waiting2,
  VectorComponentnavigationsteps6,
  StepsItemArrow3,
  Rectangle13,
  VectorComponentnavigationsteps7,
  InstanceComponentstepsitemnaviga4,
  Wrapper5,
  StepsItemProgressIcon4,
  Text33,
  Content4,
  Waiting3,
  VectorComponentnavigationsteps8,
} from './styles';

const DetalhesOrdemdeProducaoPage = () => {
  const dataSourceMateriaisTable = [
    {
      key: '0',
      codigo10: '30000806',
      por11: '34.400%',
      descricao12: '340-81:TAP WATER: PIPELINE',
      quantidadePedida13: '50 Kg',
      quantidadeReal14: '-',
      adicoesMotivo15: '-',
    },
    {
      key: '1',
      codigo10: '30226125',
      por11: '1.800%',
      descricao12: '531-0130:CERIDUST 3715:BAG2',
      quantidadePedida13: '2,6 Kg',
      quantidadeReal14: '-',
      adicoesMotivo15: '-',
    },
    {
      key: '2',
      codigo10: '30537820',
      por11: '3.800%',
      descricao12: '425-0401:MONOETANOLAMINA',
      quantidadePedida13: '5,5 Kg',
      quantidadeReal14: '-',
      adicoesMotivo15: '-',
    },
    {
      key: '3',
      codigo10: 'Total',
      por11: [<Content10Row4Column11 />],
      descricao12: [<Content11Row4Column21 />],
      quantidadePedida13: '58,1 Kg',
      quantidadeReal14: '0 Kg',
      adicoesMotivo15: [<Content12Row4Column51 />],
    },
  ];

  return (
    <DetalhesOrdemdeProducao>
      <PageHeader1>
        <Header2>
          <IconOutlinedArrowLeft />
          <OrdemdeProducao>Ordem de Produção</OrdemdeProducao>
          <Text10146112193>#10146112193</Text10146112193>
        </Header2>
      </PageHeader1>
      <Body1>
        <Card01>
          <Title22>
            <Geral>Geral</Geral>
          </Title22>
          <Body2>
            <Row1>
              <Field>
                <Produto>Produto:</Produto>
                <TextComponent91330712>
                  91330712 242259A:PRETO 2 FR 395665:FK22
                </TextComponent91330712>
              </Field>
            </Row1>
            <Row2>
              <Field1>
                <OrdemdeFabricacao>Ordem de Fabricação:</OrdemdeFabricacao>
                <Text3SCUQB00E7>3SCUQB00E7</Text3SCUQB00E7>
              </Field1>
            </Row2>
            <Row3>
              <Field2>
                <Quantidade>Quantidade:</Quantidade>
                <Text1000Kg>1000 Kg</Text1000Kg>
              </Field2>
              <Field3>
                <QuantidadePedidaCliente>
                  Quantidade Pedida Cliente:
                </QuantidadePedidaCliente>
                <Text500Kg>500 Kg</Text500Kg>
              </Field3>
            </Row3>
            <DividerHorizontal>
              <Line />
            </DividerHorizontal>
            <Row4>
              <Field4>
                <PedidodoCliente>Pedido do Cliente:</PedidodoCliente>
                <Text17688038>17688038</Text17688038>
              </Field4>
              <Field5>
                <NomedoCliente>Nome do Cliente:</NomedoCliente>
                <Text179719KLABINSA>179719 - KLABIN S.A.</Text179719KLABINSA>
              </Field5>
            </Row4>
            <Row5>
              <Field6>
                <DatadeColocacaodoPedido>
                  Data de Colocação do Pedido:
                </DatadeColocacaodoPedido>
                <Text07022022114017BRT>
                  07/02/2022 - 11:40:17 (BRT)
                </Text07022022114017BRT>
              </Field6>
              <Field7>
                <DatadeConfirmacao>Data de Confirmação:</DatadeConfirmacao>
                <Text31012022>31/01/2022</Text31012022>
              </Field7>
              <Field8>
                <DatadeEnvioSolicitada>
                  Data de Envio Solicitada:
                </DatadeEnvioSolicitada>
                <Text11022022>11/02/2022</Text11022022>
              </Field8>
              <Field9>
                <DataFinaldaProducao>
                  Data Final da Produção
                </DataFinaldaProducao>
                <Text14022022>14/02/2022</Text14022022>
              </Field9>
            </Row5>
          </Body2>
        </Card01>
        <Card02>
          <Title23>
            <Materiais>Materiais</Materiais>
          </Title23>
          <Body3>
            <MateriaisTable dataSource={dataSourceMateriaisTable}>
              <ColumnMateriaisTable
                title="Código"
                dataIndex="codigo10"
                key="codigo10"
                align="left"
                filters={[
                  { text: '30000806', value: '30000806' },
                  { text: '30226125', value: '30226125' },
                  { text: '30537820', value: '30537820' },
                  { text: 'Total', value: 'Total' },
                ]}
                width="97px"
                onFilter={(value, record: any) =>
                  record.codigo10.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable
                title="Por (%)"
                dataIndex="por11"
                key="por11"
                align="left"
                width="98px"
              />
              <ColumnMateriaisTable
                title="Descrição"
                dataIndex="descricao12"
                key="descricao12"
                align="left"
                width="531.5px"
              />
              <ColumnMateriaisTable
                title="Quantidade Pedida"
                dataIndex="quantidadePedida13"
                key="quantidadePedida13"
                align="left"
                filters={[
                  { text: '50 Kg', value: '50 Kg' },
                  { text: '2,6 Kg', value: '2,6 Kg' },
                  { text: '5,5 Kg', value: '5,5 Kg' },
                  { text: '58,1 Kg', value: '58,1 Kg' },
                ]}
                width="171px"
                onFilter={(value, record: any) =>
                  record.quantidadePedida13.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable
                title="Quantidade Real"
                dataIndex="quantidadeReal14"
                key="quantidadeReal14"
                align="left"
                filters={[
                  { text: '-', value: '-' },
                  { text: '0 Kg', value: '0 Kg' },
                ]}
                width="155px"
                onFilter={(value, record: any) =>
                  record.quantidadeReal14.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable
                title="Adições / Motivo"
                dataIndex="adicoesMotivo15"
                key="adicoesMotivo15"
                align="left"
                width="531.5px"
              />
            </MateriaisTable>
          </Body3>
        </Card02>
        <Card021>
          <Title24>
            <Processo>Processo</Processo>
          </Title24>
          <Body4>
            <InstanceComponentstepsgroupnavig>
              <InstanceComponentstepsitemnaviga>
                <Wrapper1>
                  <StepsItemProgressIcon>
                    <Text2>1</Text2>
                  </StepsItemProgressIcon>
                  <Content>
                    <Inprogress>Pesar</Inprogress>
                  </Content>
                </Wrapper1>
                <VectorComponentnavigationsteps />
              </InstanceComponentstepsitemnaviga>
              <StepsItemArrow>
                <Rectangle1 />
                <VectorComponentnavigationsteps1 />
              </StepsItemArrow>
              <InstanceComponentstepsitemnaviga1>
                <Wrapper2>
                  <StepsItemProgressIcon1>
                    <Text3>2</Text3>
                  </StepsItemProgressIcon1>
                  <Content1>
                    <Waiting>Homogenizar</Waiting>
                  </Content1>
                </Wrapper2>
                <VectorComponentnavigationsteps2 />
              </InstanceComponentstepsitemnaviga1>
              <StepsItemArrow1>
                <Rectangle11 />
                <VectorComponentnavigationsteps3 />
              </StepsItemArrow1>
              <InstanceComponentstepsitemnaviga2>
                <Wrapper3>
                  <StepsItemProgressIcon2>
                    <Text31>3</Text31>
                  </StepsItemProgressIcon2>
                  <Content2>
                    <Waiting1>Controle de Qualidade</Waiting1>
                  </Content2>
                </Wrapper3>
                <VectorComponentnavigationsteps4 />
              </InstanceComponentstepsitemnaviga2>
              <StepsItemArrow2>
                <Rectangle12 />
                <VectorComponentnavigationsteps5 />
              </StepsItemArrow2>
              <InstanceComponentstepsitemnaviga3>
                <Wrapper4>
                  <StepsItemProgressIcon3>
                    <Text32>4</Text32>
                  </StepsItemProgressIcon3>
                  <Content3>
                    <Waiting2>Envasar</Waiting2>
                  </Content3>
                </Wrapper4>
                <VectorComponentnavigationsteps6 />
              </InstanceComponentstepsitemnaviga3>
              <StepsItemArrow3>
                <Rectangle13 />
                <VectorComponentnavigationsteps7 />
              </StepsItemArrow3>
              <InstanceComponentstepsitemnaviga4>
                <Wrapper5>
                  <StepsItemProgressIcon4>
                    <Text33>5</Text33>
                  </StepsItemProgressIcon4>
                  <Content4>
                    <Waiting3>Rotular</Waiting3>
                  </Content4>
                </Wrapper5>
                <VectorComponentnavigationsteps8 />
              </InstanceComponentstepsitemnaviga4>
            </InstanceComponentstepsgroupnavig>
          </Body4>
        </Card021>
      </Body1>
    </DetalhesOrdemdeProducao>
  );
};

export default DetalhesOrdemdeProducaoPage;
