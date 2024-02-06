import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './saved.style';

const Saved = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Saved</Text>
      </View>
    </View>
  );
};

export default Saved;
