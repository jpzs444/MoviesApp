import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './ctabutton.style';

const CtaButton = ({buttonColor, imagePath, text, textColor}) => {
  return (
    <TouchableOpacity style={{...styles.button, backgroundColor: buttonColor}}>
      <Image style={styles.buttonImage} source={imagePath} />
      <Text style={{...styles.buttonText, color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CtaButton;
