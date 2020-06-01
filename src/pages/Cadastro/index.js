import React from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  Form,
  Container,
  Input,
  InputForm,
  Button,
  ButtonText,
} from '../Login/styles';

class Cadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        name: '',
        email: '',
        phone: '',
        password: '',
        password_repeat: '',
      },
      isDisabled: true,
      disabledButton: function() {
        this.user.password !== '' &&
        this.user.username !== '' &&
        this.user.name !== '' &&
        this.user.email !== '' &&
        this.user.phone !== '' &&
        this.user.password_repeat !== ''
          ? (this.isDisabled = false)
          : (this.isDisabled = true);
      },
    };
  }

  criarConta() {
    var {
      username,
      name,
      email,
      phone,
      password,
      password_repeat,
    } = this.state.user;

    var phone_pattern = /^[0-9]{5}-[0-9]{4}$/;
    var email_pattern = /\w+@\w+(.com.br | .com)/;

    if (!email_pattern.test(email)) {
      Alert.alert('', 'PADRÃO DE EMAIL INCORRETO');
    }

    if (!phone_pattern.test(phone)) {
      Alert.alert('', 'ESCREVA O TELEFONE CORRETAMENTE');
    }

    if (password !== password_repeat) {
      Alert.alert('', 'SENHA NÃO BATE');
    }
  }

  render() {
    this.state.disabledButton();
    return (
      <Container>
        <Form>
          <InputForm>
            <Icon name="social-github" size={25} />
            <Input
              onChangeText={text => {
                this.setState({
                  user: {
                    username: text,
                    name: this.state.user.name,
                    email: this.state.user.email,
                    phone: this.state.user.phone,
                    password: this.state.user.password,
                    password_repeat: this.state.user.password_repeat,
                  },
                });
              }}
              placeholder="Github username"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </InputForm>
          <InputForm>
            <Icon name="people" size={25} />
            <Input
              onChangeText={text => {
                this.setState({
                  user: {
                    username: this.state.user.username,
                    name: text,
                    email: this.state.user.email,
                    phone: this.state.user.phone,
                    password: this.state.user.password,
                    password_repeat: this.state.user.password_repeat,
                  },
                });
              }}
              placeholder="Nome completo"
            />
          </InputForm>
          <InputForm>
            <Icon name="envelope" size={25} />
            <Input
              onChangeText={text => {
                this.setState({
                  user: {
                    username: this.state.user.username,
                    name: this.state.user.name,
                    email: text,
                    phone: this.state.user.phone,
                    password: this.state.user.password,
                    password_repeat: this.state.user.password_repeat,
                  },
                });
              }}
              placeholder="Email de contato"
            />
          </InputForm>
          <InputForm>
            <Icon name="phone" size={25} />
            <Input
              onChangeText={text => {
                this.setState({
                  user: {
                    username: this.state.user.username,
                    name: this.state.user.name,
                    email: this.state.user.email,
                    phone: text,
                    password: this.state.user.password,
                    password_repeat: this.state.user.password_repeat,
                  },
                });
              }}
              placeholder="Telefone"
            />
          </InputForm>
          <InputForm>
            <Icon name="lock" size={25} />
            <Input
              onChangeText={text => {
                this.setState({
                  user: {
                    username: this.state.user.username,
                    name: this.state.user.name,
                    email: this.state.user.email,
                    phone: this.state.user.phone,
                    password: text,
                    password_repeat: this.state.user.password_repeat,
                  },
                });
              }}
              secureTextEntry={true}
              placeholder="Crie uma senha"
              accessibilityLabel="sua senha"
            />
          </InputForm>
          <InputForm>
            <Icon name="lock" size={25} />
            <Input
              onChangeText={text => {
                this.setState({
                  user: {
                    username: this.state.user.username,
                    name: this.state.user.name,
                    email: this.state.user.email,
                    phone: this.state.user.phone,
                    password: this.state.user.password,
                    password_repeat: text,
                  },
                });
              }}
              secureTextEntry={true}
              placeholder="Repita a senha"
            />
          </InputForm>
          <Button
            onPress={() => {
              this.criarConta();
            }}
            disabled={this.state.isDisabled}>
            <ButtonText>CRIAR CONTA</ButtonText>
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Cadastro;
