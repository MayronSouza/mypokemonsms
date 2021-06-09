import styled from 'styled-components/native';
import { SvgUri } from 'react-native-svg';
import { ActivityIndicator } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #2b2113;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const PokeCard = styled.View`
  width: 80%;
  height: 90%;
  background-color: #ecd1ab;
  border-bottom-color: #f99000;
  border-left-color: #f99000;
  border-top-color: #f99000;
  border-right-color: #f99000;
  border-bottom-width: 15px;
  border-left-width: 15px;
  border-top-width: 15px;
  border-right-width: 15px;
`;

const PokeCardTitle = styled.Text`
  align-self: center;
  margin-top: 4px;
  font-size: 24px;
  font-weight: bold;
  color: #2b2113;
`;

const PokeCardDivider = styled.View`
  padding: 5px;
  margin: 5px;
  border-bottom-color: #f99000;
  border-bottom-width: 3px;
`;

const PokeImage = styled(SvgUri).attrs({
  width: '45%',
  height: '25%',
  alignSelf: 'center',
})``;

const Loading = styled(ActivityIndicator).attrs({
  size: "large",
  color:"#f99000",
})``;

const Description = styled.View`
  justify-content: space-around;
  /* align-items: center; */
  width: 90%;
  height: 40%;
  align-self: center;
  margin-top: 16px;
`;

const DescriptionText = styled.Text`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #2b2113;
`;

const DescriptionItemText = styled.Text`
  margin-top: 5px;
  margin-left: 24px;
  padding-top: 5px;
  font-size: 18px;
  color: #7c4f11;
`;

export {
  Container,
  Title,
  PokeCard,
  PokeCardTitle,
  PokeCardDivider,
  PokeImage,
  Loading,
  Description,
  DescriptionText,
  DescriptionItemText,
};