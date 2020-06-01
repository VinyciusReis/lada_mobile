import React from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import api from '../../Services/api';
import logo_app from '../../../images/recife.jpg';
import {
  Container,
  Logo,
  Form,
  Input,
  InputForm,
  Button,
  ButtonText,
  CadastroLink,
  CadastroLinkText,
} from './styles';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isDisabled: true,
      disabledButton: function() {
        this.password !== '' && this.username !== ''
          ? (this.isDisabled = false)
          : (this.isDisabled = true);
      },
    };
  }

  async fazerLogin() {
    const response = await api.get('adad');
  }
  render() {
    this.state.disabledButton();
    return (
      <Container>
        <Form>
          <Logo source={logo_app} />
          <InputForm>
            <Icon name="social-github" size={25} />
            <Input
              onChangeText={text => {
                this.setState({username: text});
              }}
              placeholder="Github username"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </InputForm>
          <InputForm>
            <Icon name="lock" size={25} />
            <Input
              onChangeText={text => {
                this.setState({password: text});
              }}
              secureTextEntry={true}
              placeholder="sua senha"
            />
          </InputForm>
          <Button
            onPress={() => {
              this.fazerLogin();
            }}
            disabled={this.state.isDisabled}>
            <ButtonText>LOGIN</ButtonText>
          </Button>
        </Form>
        <CadastroLink
          onPress={() => {
            this.props.navigation.navigate('cadastro');
          }}>
          <CadastroLinkText>CADASTRE-SE</CadastroLinkText>
        </CadastroLink>
      </Container>
    );
  }
}

export default Login;
