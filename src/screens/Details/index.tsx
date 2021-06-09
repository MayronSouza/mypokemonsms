import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
} from 'react-native';

import { PokeAPI } from '../../assets/api';

import {
  Container,
  PokeCard,
  PokeCardTitle,
  PokeCardDivider,
  PokeImage,
  Description,
  DescriptionText,
  DescriptionItemText,
  Loading,
} from './styles';

interface DetailsProps {
  route: {
    params: {
      name: string;
    }
  };
}

interface AbilitiesProps {
  ability: {
    name: string;
    url: string;
  }
}

const Details = ({ route }: DetailsProps) => {
  const { name } = route.params;

  const [abilities, setAbilities] = useState<AbilitiesProps[]>([]);
  const [experience, setExperience] = useState('');
  const [figure, setFigure] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  useEffect(()=> {
    PokeAPI.get(`/pokemon/${name}`)
      .then(response => {
        setFigure(response.data.sprites.other.dream_world.front_default);
        setAbilities(response.data.abilities);
        setExperience(response.data.base_experience.toString()  + ' exp');
        setHeight(response.data.height.toString() + ' m');
        setWeight(response.data.weight.toString() + ' Kg');
      })
      .catch(error => console.log(error));
  }, [name]);

  return (
    <Container>
      {figure !== '' ?
        <PokeCard>
          <PokeCardTitle>{name.toUpperCase()}</PokeCardTitle>
          <PokeCardDivider />
          <PokeImage
            uri={figure}
            onPress={() => console.log(name)}
          />
          <Description>
            <DescriptionText>
              Experiência: {''}
              <DescriptionItemText>
                {experience}
              </DescriptionItemText>
            </DescriptionText>
            <DescriptionText>
              Altura: {''}
              <DescriptionItemText>
              {height}
              </DescriptionItemText>
            </DescriptionText>
            <DescriptionText>
              Peso: {''}
              <DescriptionItemText>
              {weight}
              </DescriptionItemText>
            </DescriptionText>
            <DescriptionText>Habilidades:</DescriptionText>
            {abilities.map(ability => (
              <DescriptionItemText key={ability.ability.name}>{ability.ability.name}</DescriptionItemText>   
            ))}
          </Description>
        </PokeCard> :
        <Loading />
      }   
    </Container>
  );
}

export { Details };