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
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 0px 0px 0px;
  background-color: #9a71ff;
`;
export const MenuGroup = styled.div`
  height: 100%;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 0px 0px 0px;
  background-color: #ffffff;
`;
export const FirstSection = styled.div`
  height: 256px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 0px 0px;
`;
export const MenuItem = styled.div`
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
  background-color: #ffffff;
`;
export const IconOutlinedProject = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  padding: 0px 0px 0px 0px;
  background: url(${IconOutlinedProjectImage});
  background-repeat: no-repeat;
`;
export const Label = styled(GenericText)`
  margin: 0px;
  left: 15.5px;
  top: 34px;
  width: 38px;
`;

export const MenuItem1 = styled.div`
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
  background-color: #ffffff;
`;
export const IconOutlinedPartition = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  padding: 0px 0px 0px 0px;
  background: url(${IconOutlinedPartitionImage});
  background-repeat: no-repeat;
`;
export const Label1 = styled(GenericText)`
  margin: 0px;
  left: 8.5px;
  top: 34px;
  width: 52px;
`;

export const MenuItem2 = styled.div`
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
  background-color: #f7f1ff;
`;
export const IconOutlinedDatabase = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  padding: 0px 0px 0px 0px;
  background: url(${IconOutlinedDatabaseImage});
  background-repeat: no-repeat;
`;
export const Label2 = styled(GenericText)`
  font-weight: 500;
  color: #7447f9;
  margin: 0px;
  left: 21.5px;
  top: 34px;
  width: 26px;
`;

export const MenuItem3 = styled.div`
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
  background-color: #ffffff;
`;
export const IconOutlinedApi = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  padding: 0px 0px 0px 0px;
  background: url(${IconOutlinedApiImage});
  background-repeat: no-repeat;
`;
export const Label3 = styled(GenericText)`
  margin: 0px;
  left: 14px;
  top: 34px;
  width: 41px;
`;

export const SecondSection = styled.div`
  height: 128px;
  width: 68px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px 0px 0px 0px;
`;
export const MenuItem4 = styled.div`
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
  background-color: #ffffff;
`;
export const Icon = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  padding: 0px 0px 0px 0px;
  background: url(${IconImage});
  background-repeat: no-repeat;
`;
export const Label4 = styled(GenericText)`
  margin: 0px;
  left: 12px;
  top: 34px;
  width: 45px;
`;

export const MenuItem5 = styled.div`
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
  background-color: #ffffff;
`;
export const Icon1 = styled.div`
  height: 16px;
  width: 16px;
  box-sizing: border-box;
  padding: 0px 0px 0px 0px;
  background: url(${Icon1Image});
  background-repeat: no-repeat;
`;
export const Label5 = styled(GenericText)`
  margin: 0px;
  left: 21.5px;
  top: 34px;
  width: 26px;
`;

export const Divider = styled.div`
  height: 100%;
  width: 2px;
  outline: 1px solid rgba(0, 0, 0, 0.1);
  outline-offset: -0.5px;
  padding: 0px 0px 0px 0px;
`;
