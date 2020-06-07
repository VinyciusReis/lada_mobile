import React from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AuthContext from '../../Context/authContext';
import {
  Container,
  Avatar,
  Account,
  Infos,
  Input,
  Buttons,
  SimpleButton,
  TextButton,
} from './styles';

class Perfil extends React.Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Editar',
      editabled: false,
      user: {
        nome: '',
        email: '',
        github_username: '',
        phone: '',
        avatar_perfil: '',
        token: '',
      },
    };
  }

  componentDidMount() {
    let {user} = this.context;
    let image_url = user.dev.avatar_url;
    let name = user.dev.name;
    let email_dev = user.dev.email;
    let username = user.dev.username_github;
    let telefone = user.dev.phone;
    let tk = user.dev.token;
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      user: {
        nome: name,
        email: email_dev,
        github_username: username,
        phone: telefone,
        avatar_perfil: image_url,
        token: tk,
      },
    });
  }

  editarPerfil() {
    let buttonText = this.state.buttonText;
    if (buttonText === 'Editar') {
      this.setState({buttonText: 'Salvar', editabled: !this.state.editabled});
    } else {
      this.setState({buttonText: 'Editar', editabled: !this.state.editabled});
      let {atualizarDev} = this.context;
      let dev = {
        username: this.state.user.github_username,
        nome: this.state.user.nome,
        email_dev: this.state.user.email,
        telefone: this.state.user.phone,
      };

      atualizarDev(dev);
    }
  }

  deleteAccount() {
    /*Alert.alert(
      'Mensagem',
      'VOCÊ DESEJA REMOVER SUA CONTA?',
      [{text: 'SIM', style: 'default'}, {text: 'CANCELAR', style: 'cancel'}],
      {cancelable: false},
    );
    */
    let {logOut} = this.context;

    logOut();
  }

  render() {
    return (
      <Container>
        <Account>
          <Avatar source={{uri: this.state.user.avatar_perfil}} />
          <Icon name="trash" size={25} onPress={() => this.deleteAccount()} />
        </Account>
        <Infos>
          <Input
            defaultValue={this.state.user.github_username}
            editable={this.state.editabled}
          />
          <Input
            defaultValue={this.state.user.nome}
            editable={this.state.editabled}
          />
          <Input
            defaultValue={this.state.user.email}
            editable={this.state.editabled}
          />
          <Input
            onChangeText={text => {
              this.setState({
                user: {
                  phone: text,
                  nome: this.state.user.nome,
                  email: this.state.user.email,
                  github_username: this.state.user.github_username,
                  avatar_perfil: this.state.user.avatar_perfil,
                  token: this.state.user.token,
                },
              });
            }}
            defaultValue={this.state.user.phone}
            editable={this.state.editabled}
          />
          <Input editable={this.state.editabled} />
        </Infos>
        <Buttons>
          <SimpleButton
            onPress={() => {
              this.props.navigation.navigate('tecnologia');
            }}>
            <TextButton>Techs</TextButton>
          </SimpleButton>
          <SimpleButton
            onPress={() => {
              this.editarPerfil();
            }}>
            <TextButton>{this.state.buttonText}</TextButton>
          </SimpleButton>
        </Buttons>
      </Container>
    );
  }
}

export default Perfil;
