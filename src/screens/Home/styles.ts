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
  border-color: #fff;
  border-width: 2px;
  border-radius: 50px;
`;

const Picker = styled.Picker`
  justify-content: center;
  align-items: center;       
  text-align: center;
  color: #fff;     
  width: 250px;   
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #f99000;
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