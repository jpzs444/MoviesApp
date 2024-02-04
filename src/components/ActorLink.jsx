import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const actorImg = require('../assets/images/actor.jpg');

const ActorLink = ({actorName}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.actorImageContainer}>
        <Image style={styles.actorImage} source={actorImg} />
      </View>
      <Text style={styles.actorName}>{actorName}</Text>
    </TouchableOpacity>
  );
};

export default ActorLink;

const styles = StyleSheet.create({
  button: {
    width: 80,
  },
  actorImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 70,
    alignSelf: 'center',
  },
  actorImage: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 70,
  },
  actorName: {
    marginTop: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#141313',
  },
});
