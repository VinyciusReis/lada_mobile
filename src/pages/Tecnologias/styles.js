import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: lightsalmon;
`;

export const Techs = styled.View`
  height: 80px;
  justify-content: space-around;
  background-color: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
`;

export const TechName = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 20px;
`;

export const TechScore = styled.Text`
  font-family: 'Microsoft Sans Serif';
  font-size: 18px;
`;
