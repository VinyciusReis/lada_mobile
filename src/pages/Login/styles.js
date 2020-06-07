import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: lightsalmon;
`;

export const Logo = styled.Image`
  margin-bottom: 30px;
`;

export const Form = styled.View`
  flex: 1;
  align-items: center;
  padding: 80px 25px;
`;

export const InputForm = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  margin-bottom: 5px;
  padding: 0 5px;
  border-radius: 40px;
`;
export const Input = styled.TextInput`
  flex: 1;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  align-self: stretch;
  padding: 15px;
  background-color: purple;
  border-radius: 40px;
  opacity: ${props => (props.disabled === true ? 0.5 : 1)};
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

export const CadastroLink = styled.TouchableOpacity`
  align-self: flex-start;
  flex-direction: row;
  padding: 10px;
`;

export const CadastroLinkText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
