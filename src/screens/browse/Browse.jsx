import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {MovieCard, Search} from '../../components';
import {styles} from './browse.style';

const userImg = require('../../assets/images/user.png');
const showMoreIcon = require('../../assets/icons/show-more.png');

const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [searchValue, setSearchValue] = useState('avengers');

  const flatListRef = useRef(null);

  useEffect(() => {
    const fetchOMDbMovies = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=<KEY_HERE>&page=${pageNum}&s=${searchValue}&type=movie`,
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

    flatListRef.current?.scrollToOffset({offset: 0, animated: true});
  };

  console.log(movies);
  console.log(totalResults);
  console.log(isHidden);
  console.log(searchValue);

  const showMore = () => {
    return (
      <TouchableOpacity
        style={!isHidden ? styles.showMore : styles.hideShowMore}
        onPress={() => setPageNum(pageNum + 1)}>
        <Text style={styles.showMoreText}>Show More</Text>
        <Image style={styles.showMoreIcon} source={showMoreIcon} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.browserContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Browse</Text>
        <TouchableOpacity>
          <Image
            style={styles.profilePicture}
            source={userImg}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchComponentContainer}>
        <Search onSearchChange={handleOnSearchChange} />
      </View>
      <View style={styles.movieListContainer}>
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.movieList}
          data={movies}
          renderItem={({item}) => <MovieCard key={item.imdbID} data={item} />}
          keyExtractor={item => item.imdbID}
          ListFooterComponent={showMore}
          ref={flatListRef}
          // onEndReached={() => setPageNum(pageNum + 1)}
          // onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
};

export default Browse;
