import React, {useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';

const searchIcon = require('../assets/icons/search.png');

const Search = ({onSearchChange}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChangeText = newText => {
    setSearchValue(newText);
    onSearchChange(newText);
  };

  console.log(searchValue);

  return (
    <View style={styles.searchContainer}>
      <TextInput
        value={searchValue}
        placeholder="Search Movies"
        placeholderTextColor={'#808080'}
        onChangeText={newText => handleOnChangeText(newText)}
        style={[styles.text, styles.search]}
      />
      <Image style={styles.searchIcon} source={searchIcon} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    position: 'relative',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#141313',
  },
  search: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingVertical: 6,
    paddingLeft: 47,
  },
  searchIcon: {
    width: 22,
    height: 22,
    opacity: 0.4,
    position: 'absolute',
    top: 10,
    left: 14,
  },
});
