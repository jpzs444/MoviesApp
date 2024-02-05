import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './tag.style';

const Tag = ({text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Tag;
