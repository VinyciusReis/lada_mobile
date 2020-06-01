import styled from 'styled-components/native';
import {Picker} from '@react-native-community/picker';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: lightsalmon;
`;

export const Filtros = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: lightgray;
  padding: 0 3px;
`;

export const Form = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 0 10px;
`;

export const Perfil = styled.View`
  flex-direction: row;
  justify-content: center;
  background-color: #ad34ea;
`;

export const Cards = styled.ScrollView`
  padding: 15px;
`;

export const Vaga = styled.View`
  margin-bottom: 8px;
  padding: 10px;
  background-color: #fff;
  border-radius: 50px;
`;

export const VagaSup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

export const VagaMiddle = styled.View`
`;

export const VagaInf = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
`;

export const Avatar = styled.Image`
  border-radius: 50px;
  width: 60px;
  height: 60px;
  position: relative;
  top: -15px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  padding: 10px;
`;

export const ButtonSearch = styled(RectButton)`
  background-color: blue;
  margin-left: 5px;
  padding: 5px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 20px;
  color: #fff;
`;

export const Titulo = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 22px;
`;

export const Empresa = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 22px;
`;

export const Salario = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 15px;
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

export const Dropdown = styled(Picker)`
  flex: 1;
  padding: 3px;
`;
