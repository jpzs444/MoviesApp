import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const heartEmpty = require('../assets/icons/heart-empty.png');

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

const styles = StyleSheet.create({
  cardContainer: {
    width: 180,
    height: 267,
    position: 'relative',
    elevation: 3,
    shadowColor: '#000000',
    backgroundColor: '#FDFDFD',
  },
  moviePoster: {
    width: 180,
    height: 267,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  moviePosterGradient: {
    width: '100%',
    height: 137,
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
  },
  movieTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#FDFDFD',
    padding: 12,
    position: 'absolute',
    bottom: 0,
  },
  saveButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FDFE',
    borderRadius: 50,
    position: 'absolute',
    top: 12,
    right: 12,
    elevation: 5,
    shadowColor: '#000000',
  },
  saveIcon: {
    width: 18,
    height: 18,
    resizeMode: 'cover',
  },
});
