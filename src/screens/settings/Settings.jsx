import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './settings.style';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
    </View>
  );
};

export default Settings;
