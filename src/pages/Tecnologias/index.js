import React from 'react';
import {Container, Techs, TechName, TechScore} from './styles';

class Tecnologias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      techs: [],
    };
  }
  render() {
    return (
      <Container>
        <Techs>
          <TechName>JavaScript</TechName>
          <TechScore>0.986</TechScore>
        </Techs>
      </Container>
    );
  }
}

export default Tecnologias;
