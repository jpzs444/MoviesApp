import React from 'react';
import {Browse, Home, MovieDetails, Saved, Settings} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

const HOME_ICON = ({color}) => (
  <Feather name="home" size={24} color={color} />
);
const SEARCH_ICON = ({color}) => (
  <Feather name="search" size={24} color={color} />
);
const SAVED_ICON = ({color}) => (
  <Feather name="heart" size={24} color={color} />
);
const SETTINGS_ICON = ({color}) => (
  <Feather name="settings" size={24} color={color} />
);

const tabBarCustomStyles = {
  BAR: {height: 54, paddingVertical: 5},
  ITEM: {marginVertical: 5},
  LABEL: {fontFamily: 'Roboto-Regular'},
  INACTIVE_TINT: '#CCCCCC',
  ACTIVE_TINT: '#FF8A71',
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BrowseStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Browse"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen name="Details" component={MovieDetails} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: HOME_ICON,
          tabBarStyle: tabBarCustomStyles.BAR,
          tabBarItemStyle: tabBarCustomStyles.ITEM,
          tabBarLabelStyle: tabBarCustomStyles.LABEL,
          tabBarInactiveTintColor: tabBarCustomStyles.INACTIVE_TINT,
          tabBarActiveTintColor: tabBarCustomStyles.ACTIVE_TINT,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="BrowseTab"
        component={BrowseStack}
        options={{
          title: 'Browse',
          tabBarIcon: SEARCH_ICON,
          tabBarStyle: tabBarCustomStyles.BAR,
          tabBarItemStyle: tabBarCustomStyles.ITEM,
          tabBarLabelStyle: tabBarCustomStyles.LABEL,
          tabBarInactiveTintColor: tabBarCustomStyles.INACTIVE_TINT,
          tabBarActiveTintColor: tabBarCustomStyles.ACTIVE_TINT,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="SavedTab"
        component={Saved}
        options={{
          title: 'Saved',
          tabBarIcon: SAVED_ICON,
          tabBarStyle: tabBarCustomStyles.BAR,
          tabBarItemStyle: tabBarCustomStyles.ITEM,
          tabBarLabelStyle: tabBarCustomStyles.LABEL,
          tabBarInactiveTintColor: tabBarCustomStyles.INACTIVE_TINT,
          tabBarActiveTintColor: tabBarCustomStyles.ACTIVE_TINT,
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: SETTINGS_ICON,
          tabBarStyle: tabBarCustomStyles.BAR,
          tabBarItemStyle: tabBarCustomStyles.ITEM,
          tabBarLabelStyle: tabBarCustomStyles.LABEL,
          tabBarInactiveTintColor: tabBarCustomStyles.INACTIVE_TINT,
          tabBarActiveTintColor: tabBarCustomStyles.ACTIVE_TINT,
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FDFDFD',
  },
});
