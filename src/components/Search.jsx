import React, {useState} from 'react';
import {TextInput} from 'react-native';

const Search = ({onSearchChange}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChangeText = newText => {
    setSearchValue(newText);
    onSearchChange(searchValue);
  };

  console.log(searchValue);

  return (
    <TextInput
      value={searchValue}
      placeholder="Search Movies"
      onChangeText={newText => handleOnChangeText(newText)}
    />
  );
};

export default Search;
