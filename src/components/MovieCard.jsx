import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

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
