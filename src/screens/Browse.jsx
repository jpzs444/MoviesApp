import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {MovieCard, Search} from '../components';

const userImg = require('../assets/images/user.png');

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [searchValue, setSearchValue] = useState('avengers');

  useEffect(() => {
    const fetchOMDbMovies = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=<KEY_HERE>&page=${pageNum}&s=${searchValue}&=movie`,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();

        if (result.Search) {
          if (pageNum === 1) {
            setMovies(result.Search);
          } else {
            setMovies(prevMovies => [...prevMovies, ...result.Search]);
          }

          setTotalResults(result.totalResults);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchOMDbMovies();
  }, [pageNum, searchValue]);

  useEffect(() => {
    setIsHidden(!(movies.length < totalResults));
  }, [movies, totalResults]);

  const handleOnSearchChange = value => {
    setSearchValue(value);
    setPageNum(1);
  };

  console.log(movies);
  console.log(totalResults);
  console.log(isHidden);
  console.log(searchValue);

  return (
    <View style={{flex: 1}}>
      <View>
        <Text>Browse</Text>
        <Image
          style={{width: 50, height: 50}}
          source={userImg}
          resizeMode="cover"
        />
      </View>
      <Search onSearchChange={handleOnSearchChange} />
      <View style={{flex: 1}}>
        <FlatList
          data={movies}
          renderItem={({item}) => <MovieCard key={item.imdbID} data={item} />}
          keyExtractor={item => item.imdbID}
        />
      </View>
      {!isHidden && (
        <TouchableOpacity onPress={() => setPageNum(pageNum + 1)}>
          <Text>Show More</Text>
        </TouchableOpacity>
      )}
      <Text>Navigation</Text>
    </View>
  );
};

export default Browse;
