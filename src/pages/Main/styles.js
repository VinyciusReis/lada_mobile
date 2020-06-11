import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {Picker} from '@react-native-community/picker';

export const Container = styled.View`
  flex: 1;
  background-color: #e5e8e8;
`;

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 0 10px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  margin-left: 5px;
  padding: 10px;
`;

export const Filtros = styled.View`
  /*flex-direction: row;*/
  padding: 10px;
  /*align-items: center;*/
`;

export const Dropdown = styled(Picker)`
  /*flex: 1;*/
  height: 20px;
  padding: 5px;
  margin: 2px 0;
`;

export const Card = styled(FlatList)`
  flex: 1;
`;

export const Vaga = styled.View`
  padding: 10px;
  border-radius: 35px;
  background-color: #fff;
  margin: 5px;
`;

export const TopSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const MiddleSection = styled.View`
  padding: 5px;
`;

export const BottomSection = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
`;

export const Titulo = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 18px;
`;

export const Empresa = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 18px;
`;

export const Salario = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 15px;
  color: gray;
`;

export const Cidade = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 15px;
  text-transform: capitalize;
`;

export const Descricao = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 15px;
`;

export const Perfil = styled.View`
  align-items: center;
  height: 50px;
  background-color: #8e44ad;
`;

export const AvatarImage = styled.Image`
  height: 55px;
  width: 55px;
  border-radius: 100px;
  position: relative;
  top: -15px;
`;

export const Avatar = styled.TouchableOpacity``;

export const CardServer = styled.View`
  flex: 1;
  align-items: center;
`;
