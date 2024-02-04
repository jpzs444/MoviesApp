import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ActorLink, CtaButton, Tag} from '../components';
import LinearGradient from 'react-native-linear-gradient';

const heartEmpty = require('../assets/icons/heart-empty.png');
const star = require('../assets/icons/star.png');
const film = require('../assets/icons/film.png');
const heartWhite = require('../assets/icons/heart-white.png');
const share = require('../assets/icons/share.png');

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
    <ScrollView style={styles.movieDetailsContainer}>
      {/* 1st Layer */}
      <View>
        <Image
          style={styles.featureImage}
          source={{
            uri: `${
              details.imdbID === 'tt13238346'
                ? 'https://m.media-amazon.com/images/M/MV5BZjhmNWNiNmMtN2E2MS00MDc1LWJlMzMtYmY3NmY2YWI3MzI5XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UY281_CR0,0,500,281_.jpg'
                : 'https://lh3.googleusercontent.com/pw/ABLVV86LbpXIwvuPUrxDaHBvYwmW_i6FEgSWYnOT5E3s8jb7S13rR8Xi3Jyp_D1JM2OGfCW2z8hAecMiLeAVcq7JsYLaEe4RUjre6aY4OtUdoi0K6VDDDk0=w2400'
            }`,
          }}
        />
        <TouchableOpacity
          style={[styles.headerButton, styles.backButton]}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.backIcon}
            source={require('../assets/icons/back.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.headerButton, styles.saveButton]}>
          <Image style={styles.saveIcon} source={heartEmpty} />
        </TouchableOpacity>
        <LinearGradient
          colors={['#8C8C8C00', '#D3D3D3']}
          style={styles.backgroundGradient}
        />
      </View>
      {/* 2nd Layer */}
      {info && (
        <View style={styles.infoContainer}>
          {/* Rating - Poster - Rating */}
          <View style={styles.ratingPosterContainer}>
            <View style={styles.ratingContainer}>
              <Image style={styles.ratingIcon} source={star} />
              <Text style={styles.ratingScore}>
                {info.imdbRating ? info.imdbRating : 'N/A'}
                <Text style={styles.ratingTotalScore}>/10</Text>
              </Text>
              <Text style={styles.ratingLabel}>IMDB RATING</Text>
            </View>
            <View style={styles.moviePosterContainer}>
              <Image
                style={styles.moviePoster}
                source={{
                  uri:
                    info.Poster === 'N/A'
                      ? 'https://media.comicbook.com/files/img/default-movie.png'
                      : info.Poster,
                }}
              />
            </View>
            <View style={styles.ratingContainer}>
              <Image style={styles.ratingIcon} source={film} />
              <Text style={styles.ratingScore}>
                {info.Ratings.length > 0 &&
                /\/100$/.test(info.Ratings[info.Ratings.length - 1].Value)
                  ? info.Ratings[info.Ratings.length - 1].Value.slice(
                      0,
                      info.Ratings[info.Ratings.length - 1].Value.length - 4,
                    )
                  : 'N/A'}
              </Text>
              <Text style={styles.ratingLabel}>METASCORE</Text>
            </View>
          </View>
          <Text style={styles.movieTitle}>{info.Title}</Text>
          <Text style={styles.movieYearRuntimeRated}>
            {info.Year} • {info.Runtime} • {info.Rated}
          </Text>

          {/* Genre */}
          <View style={styles.movieGenreContainer}>
            {info.Genre.split(', ').map((genre, ind) => (
              <Tag key={ind} text={genre} />
            ))}
          </View>

          {/* Plot */}
          <View style={styles.moviePlotContainer}>
            <Text style={styles.moviePlotTitle}>Plot Summary</Text>
            <Text style={styles.moviePlot}>{info.Plot}</Text>
          </View>

          {/* Extra Info */}
          <View style={styles.movieExtrasMainContainer}>
            <View style={styles.movieExtrasContainer}>
              <Text style={styles.movieExtrasTitle}>Director:</Text>
              <Text style={styles.movieExtrasInfo}>{info.Director}</Text>
            </View>
            <View style={styles.movieExtrasContainer}>
              <Text style={styles.movieExtrasTitle}>Writer:</Text>
              <Text style={styles.movieExtrasInfo}>{info.Writer}</Text>
            </View>
            <View style={styles.movieExtrasContainer}>
              <Text style={styles.movieExtrasTitle}>Languages:</Text>
              <Text style={styles.movieExtrasInfo}>{info.Language}</Text>
            </View>
          </View>

          {/* Actors */}
          <View style={styles.movieActorsMainContainer}>
            <Text style={styles.moviesActorsTitle}>Actors</Text>
            {info.Actors === 'N/A' ? (
              <Text style={styles.movieActorsNA}>N/A</Text>
            ) : (
              <View style={styles.movieActorsContainer}>
                {info.Actors.split(', ').map((actor, ind) => (
                  <ActorLink key={ind} actorName={actor} />
                ))}
              </View>
            )}
          </View>

          {/* CTA */}
          <View style={styles.ctaButtonsContainer}>
            <View style={styles.primaryButton}>
              <CtaButton
                buttonColor={'#FF6666'}
                imagePath={heartWhite}
                text={'Add to Saved Movies'}
                textColor={'#FFFFFF'}
              />
            </View>
            <View>
              <CtaButton
                buttonColor={'#343467'}
                imagePath={share}
                text={'Share'}
                textColor={'#E1E1E1'}
              />
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  movieDetailsContainer: {
    flex: 1,
    backgroundColor: '#F9FDFE',
  },
  featureImage: {
    width: 412,
    height: 294,
    resizeMode: 'cover',
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FDFE',
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000000',
  },
  backButton: {
    position: 'absolute',
    top: 46,
    left: 12,
  },
  saveButton: {
    position: 'absolute',
    top: 46,
    right: 12,
  },
  backIcon: {
    width: 22,
    height: 22,
    resizeMode: 'cover',
  },
  saveIcon: {
    width: 22,
    height: 22,
    resizeMode: 'cover',
  },
  backgroundGradient: {
    width: '100%',
    height: 181,
    position: 'absolute',
    top: 116,
  },
  infoContainer: {
    backgroundColor: '#FDFDFD',
    marginTop: -29,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ratingPosterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ratingContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 30,
  },
  ratingIcon: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  ratingScore: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
  ratingTotalScore: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
  },
  ratingLabel: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    letterSpacing: 0.5,
    color: '#838383',
  },
  moviePosterContainer: {
    width: 158,
    height: 234,
    marginTop: -117,
    alignSelf: 'center',
    elevation: 10,
    shadowColor: '#000000',
    backgroundColor: '#FDFDFD',
    borderRadius: 5,
  },
  moviePoster: {
    width: 158,
    height: 234,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  movieTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 30,
    color: '#141313',
    textAlign: 'center',
    marginTop: 27,
    paddingHorizontal: 20,
  },
  movieYearRuntimeRated: {
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    color: '#141313',
    marginTop: 8,
    textAlign: 'center',
  },
  moviePlotContainer: {
    marginTop: 50,
  },
  moviePlotTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#141313',
    paddingHorizontal: 20,
  },
  movieGenreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 25,
    paddingHorizontal: 20,
    flexWrap: 'wrap',
  },
  moviePlot: {
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    lineHeight: 24,
    color: '#141313',
    paddingHorizontal: 20,
    marginTop: 16,
  },
  movieExtrasMainContainer: {
    marginTop: 35,
    paddingHorizontal: 20,
    gap: 4,
  },
  movieExtrasContainer: {
    flexDirection: 'row',
  },
  movieExtrasTitle: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#141313',
    flex: 1,
  },
  movieExtrasInfo: {
    fontFamily: 'Roboto-Light',
    fontSize: 16,
    lineHeight: 24,
    color: '#141313',
    flex: 2.75,
  },
  movieActorsMainContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  movieActorsContainer: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 22,
  },
  moviesActorsTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    color: '#141313',
  },
  movieActorsNA: {
    marginTop: 22,
  },
  ctaButtonsContainer: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
    marginVertical: 40,
  },
  primaryButton: {
    flex: 1,
  },
});
