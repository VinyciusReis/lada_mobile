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
  Label,
} from './styles';

class Perfil extends React.Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'Editar Perfil',
      editabled: false,
      user: {
        nome: '',
        email: '',
        github_username: '',
        phone: '',
        avatar_perfil: '#',
        token: '',
        password: '',
      },
    };
  }

  componentDidMount() {
    let {user, token, senha} = this.context;
    let image_url = user.dev.avatar_url;
    let name = user.dev.name;
    let email_dev = user.dev.email;
    let username = user.dev.username_github;
    let telefone = user.dev.phone;
    let tk = token;
    let user_senha = senha;
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      user: {
        nome: name,
        email: email_dev,
        github_username: username,
        phone: telefone,
        avatar_perfil: image_url,
        token: tk,
        password: user_senha,
      },
    });
  }

  editarPerfil() {
    let buttonText = this.state.buttonText;
    if (buttonText === 'Editar Perfil') {
      this.setState({
        buttonText: 'Salvar Infos',
        editabled: !this.state.editabled,
      });
    } else {
      this.setState({
        buttonText: 'Editar Perfil',
        editabled: !this.state.editabled,
      });
      let {atualizarDev} = this.context;
      let dev = {
        username: this.state.user.github_username,
        nome: this.state.user.nome,
        email_dev: this.state.user.email,
        telefone: this.state.user.phone,
        token: this.state.user.token,
        senha_dev: this.state.user.password,
      };

      atualizarDev(dev);
    }
  }

  deleteAccount() {
    const {deleteDev} = this.context;
    Alert.alert(
      'Mensagem',
      'VOCÊ DESEJA REMOVER SUA CONTA?',
      [
        {
          text: 'SIM',
          onPress: function() {
            Alert.alert('Conta excluída com sucesso!');
            deleteDev();
          },
          style: 'default',
        },
        {text: 'CANCELAR', style: 'cancel'},
      ],
      {cancelable: false},
    );
  }

  fazerLogout() {
    let {logOut} = this.context;

    logOut();
  }

  render() {
    return (
      <Container>
        <Account>
          <Avatar source={{uri: this.state.user.avatar_perfil}} />
          <Icon name="trash" size={35} onPress={() => this.deleteAccount()} />
          <Icon name="logout" size={35} onPress={() => this.fazerLogout()} />
        </Account>
        <Infos>
          <Label>Github username</Label>
          <Input
            onChangeText={text => {
              this.setState({
                user: {
                  github_username: text,
                  nome: this.state.user.nome,
                  phone: this.state.user.phone,
                  email: this.state.user.email,
                  avatar_perfil: this.state.user.avatar_perfil,
                  token: this.state.user.token,
                  password: this.state.user.password,
                },
              });
            }}
            defaultValue={this.state.user.github_username}
            editable={this.state.editabled}
          />
          <Label>Nome completo</Label>
          <Input
            onChangeText={text => {
              this.setState({
                user: {
                  github_username: this.state.user.github_username,
                  nome: text,
                  phone: this.state.user.phone,
                  email: this.state.user.email,
                  avatar_perfil: this.state.user.avatar_perfil,
                  token: this.state.user.token,
                  password: this.state.user.password,
                },
              });
            }}
            defaultValue={this.state.user.nome}
            editable={this.state.editabled}
          />
          <Label>Email do usuário(a)</Label>
          <Input
            onChangeText={text => {
              this.setState({
                user: {
                  github_username: this.state.user.github_username,
                  nome: this.state.user.nome,
                  phone: this.state.user.phone,
                  email: text,
                  avatar_perfil: this.state.user.avatar_perfil,
                  token: this.state.user.token,
                  password: this.state.user.password,
                },
              });
            }}
            defaultValue={this.state.user.email}
            editable={this.state.editabled}
          />
          <Label>Telefone de contato</Label>
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
                  password: this.state.user.password,
                },
              });
            }}
            defaultValue={this.state.user.phone}
            editable={this.state.editabled}
          />
          <Label>Senha do usuário(a)</Label>
          <Input
            onChangeText={text => {
              this.setState({
                user: {
                  phone: this.state.user.phone,
                  nome: this.state.user.nome,
                  email: this.state.user.email,
                  github_username: this.state.user.github_username,
                  avatar_perfil: this.state.user.avatar_perfil,
                  token: this.state.user.token,
                  password: text,
                },
              });
            }}
            defaultValue={this.state.user.password}
            editable={this.state.editabled}
          />
        </Infos>
        <Buttons>
          <SimpleButton
            onPress={() => {
              this.props.navigation.navigate('tecnologia');
            }}>
            <TextButton>Langs/Techs</TextButton>
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
