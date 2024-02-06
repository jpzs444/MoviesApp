import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './home.style';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>
    </View>
  );
};

export default Home;
