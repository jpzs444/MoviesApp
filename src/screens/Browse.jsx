import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MovieCard, Search} from '../components';

const userImg = require('../assets/images/user.png');
const showMoreIcon = require('../assets/icons/show-more.png');

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
        <Image
          style={styles.profilePicture}
          source={userImg}
          resizeMode="cover"
        />
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
          // onEndReached={() => setPageNum(pageNum + 1)}
          // onEndReachedThreshold={0.1}
        />
      </View>
    </View>
  );
};

export default Browse;

const styles = StyleSheet.create({
  browserContainer: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  headerTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    color: '#141313',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 32,
    marginBottom: 22,
    paddingHorizontal: 20,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  searchComponentContainer: {
    paddingHorizontal: 20,
  },
  movieListContainer: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
  },
  movieList: {
    columnGap: 12,
    marginBottom: 12,
  },
  showMore: {
    display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 12,
    opacity: 0.65,
  },
  showMoreText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: '#141313',
  },
  showMoreIcon: {
    width: 18,
    height: 18,
    resizeMode: 'cover',
  },
  hideShowMore: {
    display: 'none',
  },
});
