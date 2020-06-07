import React from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import logo_app from '../../../images/logo_lada.png';
import AuthContext from '../../Context/authContext';
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
  //consumindo o contexto com contextType;
  static contextType = AuthContext;
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

  fazerLogin() {
    var {username, password} = this.state;
    let {singIn} = this.context;
    singIn(username, password);
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
