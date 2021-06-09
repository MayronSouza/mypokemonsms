import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Background,
  Image,
  PickerContainer,
  Picker,
  Button,
  ButtonTitle,
} from './styles';

import { PokeAPI } from '../../assets/api';
import { ItemValue } from '@react-native-community/picker/typings/Picker';

interface PokemonProps {
  name: string;
  url: string;
}

const Home = () => {
  const [list, setList] = useState<PokemonProps[]>([]);
  const [pokeName, setPokeName] = useState<ItemValue>('');
  const navigation = useNavigation();

  useEffect(() => {
    PokeAPI.get('/pokemon?limit=2000&offset=20')
      .then(response => {
        setList(response.data.results);
        return () => setList([]);
      })
      .catch(error => console.log(error));

  }, []);

  const handleSeachPokemon = () => {
    if (pokeName) {
      navigation.navigate('Details', {
        name: pokeName,
      });
    }
  }

  return (
    <Background
      source={require('../../assets/images/background.jpg')}
      imageStyle={{ resizeMode: 'cover', opacity: 0.7 }}
    >
      <Image
        source={require('../../assets/images/logo.png')}
      />
      <PickerContainer>
        <Picker
          selectedValue={pokeName.toString()}
          onValueChange={(itemValue, itemIndex) => {
            setPokeName(itemValue)
          }}>
          {
            list.map((userData) => {
              return (
                <Picker.Item
                  label={userData.name}
                  value={userData.name}
                  key={userData.name}
                  color="#313463"
                />
              )
            })              
          }
        </Picker>
      </PickerContainer>
      <Button
        onPress={() => handleSeachPokemon()}
      >
        <ButtonTitle>Pesquisar</ButtonTitle>
      </Button>
    </Background>
  );
}

export { Home };