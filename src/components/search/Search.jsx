import React, {useState} from 'react';
import {Image, TextInput, View} from 'react-native';
import {styles} from './search.style';
import icons from '../../assets/icons';

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
      <Image style={styles.searchIcon} source={icons.searchIcon} />
    </View>
  );
};

export default Search;
