import React, { useEffect, useState } from 'react';
import { SvgUri } from 'react-native-svg';


import { PokeAPI } from '../../assets/api';

import {
  Container,
} from './styles';
import { ActivityIndicator } from 'react-native';

interface DetailsProps {
  route: {
    params: {
      name: string;
    }
  };
}

const Details = ({ route }: DetailsProps) => {
  const { name } = route.params;
  const [figure, setFigure] = useState('');

  useEffect(()=> {
    PokeAPI.get(`/pokemon/${name}`)
      .then(response => setFigure(response.data.sprites.other.dream_world.front_default))
      .catch(error => console.log(error));
  }, [name]);

  return (
    <Container>
      {figure !== '' ?
        <SvgUri
          width="50%"
          height="50%"
          uri={figure}
          onPress={() => console.log(name)}
        /> :
        <ActivityIndicator size="large" color="#080c13" />
      }   
    </Container>
  );
}

export { Details };