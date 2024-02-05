import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './actorlink.style';

const actorImg = require('../../assets/images/actor.jpg');

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
