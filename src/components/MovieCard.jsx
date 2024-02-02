import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

const MovieCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {details: data})}>
      <View>
        <Image
          style={{width: 180, height: 267, resizeMode: 'cover'}}
          source={{
            uri: `${
              data.Poster === 'N/A'
                ? 'https://media.comicbook.com/files/img/default-movie.png'
                : data.Poster
            }`,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
