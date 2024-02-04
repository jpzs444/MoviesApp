import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Tag = ({text}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Tag;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FAD9D4',
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 10,
  },
  text: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#CD6C66',
  },
});
