import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  Container,
  Cadastro,
  ButtonLogin,
  ButtonText,
  Form,
  InputForm,
} from './styles';

export default class CadastroPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Cadastro>
          <Form>
            <Icon name="social-github" size={25} />
            <InputForm placeholder="github username" />
          </Form>
          <Form>
            <Icon name="people" size={25} />
            <InputForm placeholder="nome completo" />
          </Form>
          <Form>
            <Icon name="envelope" size={25} />
            <InputForm placeholder="email de contato" />
          </Form>
          <Form>
            <Icon name="phone" size={25} />
            <InputForm placeholder="telefone" />
          </Form>
          <Form>
            <Icon name="lock" size={25} />
            <InputForm placeholder="senha de usuário" />
          </Form>
          <Form>
            <Icon name="lock" size={25} />
            <InputForm placeholder="repita a senha" />
          </Form>
          <ButtonLogin onPress={() => this.props.navigation.navigate('perfil')}>
            <ButtonText>CADASTRAR</ButtonText>
          </ButtonLogin>
        </Cadastro>
      </Container>
    );
  }
}
