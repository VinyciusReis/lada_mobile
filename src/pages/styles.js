import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: lightsalmon;
`;

export const ContainerCadastro = styled.View`
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 100px;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.View`
  flex: 1;
  padding: 0 60px;
`;

export const ContainerLangsTechs = styled.View`
  flex-direction: row;
  padding: 30px;
`;

export const PerfilButtons = styled.TouchableOpacity`
  padding: 15px;
  background-color: #8d09ca;
  margin-right: 8px;
  border-radius: 40px;
`;

export const Form = styled.View`
  flex-direction: row;
  background-color: #fff;
  padding: 5px;
  border-radius: 40px;
  margin-bottom: 7px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  border-radius: 40px;
  padding: 10px;
  background-color: #8d09ca;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
`;

export const InputForm = styled.TextInput`
  flex: 1;
  padding: 0 5px;
`;

export const LinkCadastro = styled.Text`
  text-align: center;
  padding: 5px 10px;
`;

export const Cadastro = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 60px;
`;

export const ContainerAvatar = styled.View`
  padding: 10px;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 37%;
  height: 120px;
  border-radius: 100px;
`;

export const ContainerInfosPerfil = styled.ScrollView`
  flex: 1;
  padding: 5px;
`;

export const Label = styled.Text`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const PerfilDiv = styled.View`
  padding: 5px;
`;

export const InputPerfil = styled.TextInput`
  background-color: #fff;
  border-radius: 40px;
  padding: 5px;
`;
