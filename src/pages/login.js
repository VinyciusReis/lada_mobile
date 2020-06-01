import React from 'react';
import {Alert} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  Container,
  ContainerCadastro,
  LinkCadastro,
  ContainerForm,
  Form,
  InputForm,
  ButtonLogin,
  ButtonText,
  Logo,
  ContainerLogo,
} from './styles';

const img = require('../../images/recife.jpg');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        password: '',
      },
    };
  }

  fazerLogin() {
    var username = this.state.user.username;
    var password = this.state.user.password;
    var pattern = /\s/;

    if (username === '' || password === '') {
      Alert.alert('', 'PREENCHA TODOS OS CAMPOS');
    } else {
      if (pattern.test(username) || pattern.test(password)) {
        Alert.alert('', 'Não aceito espçoes em branco');
      } else {
        this.props.navigation.navigate('main');
      }
    }
  }

  render() {
    return (
      <Container>
        <Container>
          <ContainerLogo>
            <Logo source={img} />
          </ContainerLogo>
          <ContainerForm>
            <Form>
              <Icon name="social-github" size={25} />
              <InputForm
                onChangeText={text =>
                  this.setState({
                    user: {username: text, password: this.state.user.password},
                  })
                }
                placeholder="github username"
              />
            </Form>
            <Form>
              <Icon name="lock" size={25} />
              <InputForm
                placeholder="password"
                onChangeText={text =>
                  this.setState({
                    user: {password: text, username: this.state.user.username},
                  })
                }
              />
            </Form>
            <ButtonLogin
              onPress={() => {
                this.fazerLogin();
              }}>
              <ButtonText>LOGIN</ButtonText>
            </ButtonLogin>
          </ContainerForm>
        </Container>
        <ContainerCadastro>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('cadastro', {
                name: this.state.user.username,
              });
            }}>
            <LinkCadastro>CADASTRE-SE</LinkCadastro>
          </TouchableOpacity>
        </ContainerCadastro>
      </Container>
    );
  }
}

export default Login;
