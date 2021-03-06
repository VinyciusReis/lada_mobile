import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #e5e8e8;
`;

export const Account = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
`;

export const Avatar = styled.Image`
  height: 130px;
  width: 130px;
  border-radius: 100px;
`;

export const Infos = styled.ScrollView`
  flex: 1;
  padding: 10px 0 10px 0;
`;

export const Input = styled.TextInput`
  padding: 8px;
  margin-bottom: 5px;
  border-radius: 10px;
  background-color: #fff;
`;

export const Buttons = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const SimpleButton = styled.TouchableOpacity`
  background-color: #8e44ad;
  padding: 15px;
  margin-left: 5px;
  border-radius: 15px;
`;

export const Label = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 15px;
`;

export const TextButton = styled.Text`
  text-align: center;
  text-transform: capitalize;
  font-family: 'Microsoft Sans Serif';
  font-size: 16px;
  color: #fff;
`;
