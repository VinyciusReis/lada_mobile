import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: lightsalmon;
`;

export const Account = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
`;

export const Avatar = styled.Image`
  height: 160px;
  width: 160px;
  border-radius: 100px;
`;

export const Infos = styled.View`
  flex: 1;
  padding: 10px 10px 10px 0;
`;

export const Input = styled.TextInput`
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 40px;
  background-color: #fff;
`;

export const Buttons = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const SimpleButton = styled.TouchableOpacity`
  background-color: purple;
  padding: 15px;
  margin-left: 5px;
  border-radius: 15px;
`;

export const TextButton = styled.Text`
  text-align: center;
  text-transform: capitalize;
  font-family: 'Microsoft Sans Serif';
  font-size: 16px;
  color: #fff;
`;
