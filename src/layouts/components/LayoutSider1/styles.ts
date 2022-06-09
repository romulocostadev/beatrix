import styled from 'styled-components';

import IconOutlinedProjectImage from './assets/I1531_153732_918_110211.png';
import IconOutlinedPartitionImage from './assets/I1531_153733_918_110211.png';
import IconOutlinedDatabaseImage from './assets/I1531_153734_1189_126575.png';
import IconOutlinedApiImage from './assets/I1531_153735_918_110211.png';
import IconImage from './assets/I1531_153737_918_110211.png';
import Icon1Image from './assets/I1531_153738_918_110211.png';
import GenericText from '../../../components/Text';

export const LayoutSider = styled.div`
  height: 100%;
  width: 68px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #9a71ff;
`;
export const MenuGroup = styled.div`
  flex-direction: column;
  height: 100%;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ffffff;
`;
export const FirstSection = styled.div`
  flex-direction: column;
  height: 256px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
`;
export const MenuItem = styled.div`
  flex-direction: column;
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 8px;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  background-color: #ffffff;
`;
export const IconOutlinedProject = styled.div`
  left: 26px;
  top: 10px;
  position: static;
  margin-top: 28px;
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  background: url(${IconOutlinedProjectImage});
  background-repeat: no-repeat;
`;

export const Label = styled(GenericText)`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  margin: 0px;
  left: 15.5px;
  width: 38px;
`;

export const MenuItem1 = styled.div`
  flex-direction: column;
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 8px;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  background-color: #ffffff;
`;
export const IconOutlinedPartition = styled.div`
  left: 26px;
  top: 10px;
  position: static;
  margin-top: 28px;
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  background: url(${IconOutlinedPartitionImage});
  background-repeat: no-repeat;
`;
export const Label1 = styled(GenericText)`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  margin: 0px;
  left: 8.5px;
  width: 52px;
`;

export const MenuItem2 = styled.div`
  flex-direction: column;
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 8px;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  background-color: #f7f1ff;
`;
export const IconOutlinedDatabase = styled.div`
  left: 26px;
  top: 10px;
  position: static;
  margin-top: 28px;
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  background: url(${IconOutlinedDatabaseImage});
  background-repeat: no-repeat;
`;
export const Label2 = styled(GenericText)`
  margin: 0px;
`;

export const MenuItem3 = styled.div`
  flex-direction: column;
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 8px;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  background-color: #ffffff;
`;
export const IconOutlinedApi = styled.div`
  left: 26px;
  top: 10px;
  position: static;
  margin-top: 28px;
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  background: url(${IconOutlinedApiImage});
  background-repeat: no-repeat;
`;
export const Label3 = styled(GenericText)`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  margin: 0px;
  left: 14px;
  width: 41px;
`;

export const SecondSection = styled.div`
  flex-direction: column;
  height: 128px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const MenuItem4 = styled.div`
  flex-direction: column;
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 8px;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  background-color: #ffffff;
`;
export const Icon = styled.div`
  left: 26px;
  top: 10px;
  position: static;
  margin-top: 28px;
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  background: url(${IconImage});
  background-repeat: no-repeat;
`;
export const Label4 = styled(GenericText)`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  margin: 0px;
  left: 12px;
  width: 45px;
`;

export const MenuItem5 = styled.div`
  flex-direction: column;
  height: 64px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  row-gap: 8px;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  background-color: #ffffff;
`;
export const Icon1 = styled.div`
  left: 26px;
  top: 10px;
  position: static;
  margin-top: 28px;
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  background: url(${Icon1Image});
  background-repeat: no-repeat;
`;
export const Label5 = styled(GenericText)`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.85);
  margin: 0px;
`;

export const Divider = styled.div`
  border: 1px solid #000000;
`;
