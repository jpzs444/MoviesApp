import React from 'react';
import {Browse, MovieDetails} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <SafeAreaView style={{padding: 20, paddingBottom: 0, flex: 1}}>
    //   <Browse />
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Browse"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Details" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
