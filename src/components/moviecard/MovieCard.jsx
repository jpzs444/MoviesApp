import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './moviecard.style';
import LinearGradient from 'react-native-linear-gradient';

const heartEmpty = require('../../assets/icons/heart-empty.png');

const MovieCard = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {details: data})}>
        <View>
          <Image
            style={styles.moviePoster}
            source={{
              uri: `${
                data.Poster === 'N/A'
                  ? 'https://media.comicbook.com/files/img/default-movie.png'
                  : data.Poster
              }`,
            }}
          />
        </View>
        <LinearGradient
          colors={['#00000000', '#000000']}
          style={styles.moviePosterGradient}
        />
        <Text style={styles.movieTitle}>{data.Title}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton}>
        <Image style={styles.saveIcon} source={heartEmpty} />
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
