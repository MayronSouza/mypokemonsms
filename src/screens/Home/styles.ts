import styled from 'styled-components/native';

const Background = styled.ImageBackground`
  flex: 1;
  margin-top: 20px;
  align-items: center;
`;

const Image = styled.Image`
  width: 300px;
  height: 100px;
`;

const PickerContainer = styled.View`
  flex-direction:  row;
  justify-content: center;
  align-items: center;
  height: 40px;                
  margin-top: 10px;        
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  border-color: #b16904;
  border-width: 2px;
  border-radius: 10px;
  background-color: #e0a655;
`;

const Picker = styled.Picker`
  justify-content: center;
  align-items: center;       
  text-align: center;
  color: #ffffff;   
  width: 250px;
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #e0a655;
`;

const ButtonTitle = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export {
  Background,
  Image,
  PickerContainer,
  Picker,
  Button,
  ButtonTitle,
}