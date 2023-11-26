import { styled } from "styled-components/native";

export const RootRenderItem = styled.View`
  background-color: white;
  border-radius: 6px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 6px;
  padding-right: 6px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #1e90ff;
  font-size: 20px;
  flex: 1;
`;

export const TitleDone = styled.Text`
  color: #1e90ff;
  font-size: 20px;
  flex: 1;
  text-decoration: line-through;
`;