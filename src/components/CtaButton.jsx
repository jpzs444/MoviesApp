import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CtaButton = ({buttonColor, imagePath, text, textColor}) => {
  return (
    <TouchableOpacity style={{...styles.button, backgroundColor: buttonColor}}>
      <Image style={styles.buttonImage} source={imagePath} />
      <Text style={{...styles.buttonText, color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CtaButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000000',
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
});
