import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const MovieDetails = ({route}) => {
  const navigation = useNavigation();
  const {details} = route.params;
  console.log(details);

  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=<KEY_HERE>&i=${details.imdbID}&type=movie&plot=full`,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setInfo(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [details]);

  console.log(info);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      {info && (
        <>
          <View>
            <Image
              style={{width: 158, height: 234}}
              source={{
                uri:
                  info.Poster === 'N/A'
                    ? 'https://media.comicbook.com/files/img/default-movie.png'
                    : info.Poster,
              }}
            />
          </View>
          <View>
            <Text>{info.imdbRating}/10</Text>
            <Text>IMDB RATING</Text>
          </View>
          <View>
            <Text>{info.Ratings[info.Ratings.length - 1].Value}</Text>
            <Text>METASCORE</Text>
          </View>
          <Text>{info.Title}</Text>
          <Text>
            {info.Year} • {info.Runtime} • {info.Rated}
          </Text>
          <Text>{info.Genre}</Text>
          <View>
            <Text>Plot Summary</Text>
            <Text>{info.Plot}</Text>
          </View>
          <View>
            <Text>Director</Text>
            <Text>{info.Director}</Text>
          </View>
          <View>
            <Text>Writer</Text>
            <Text>{info.Writer}</Text>
          </View>
          <View>
            <Text>Languages</Text>
            <Text>{info.Language}</Text>
          </View>
          <View>
            <Text>Actors</Text>
            <Text>{info.Actors}</Text>
          </View>
          <TouchableOpacity>
            <Text>Add to Saved Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Share</Text>
          </TouchableOpacity>

          <Text>Navigation</Text>
        </>
      )}
    </View>
  );
};

export default MovieDetails;
