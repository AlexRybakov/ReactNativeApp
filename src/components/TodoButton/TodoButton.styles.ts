import { styled } from "styled-components/native";

const Button = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 12px 0;
  margin: 34px 0;
  align-items: center;
`;

export const ButtonAdd = styled(Button)`
  background-color: #1e90ff;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const ButtonChange = styled(Button)`
  background-color: #DC143C;
`;
