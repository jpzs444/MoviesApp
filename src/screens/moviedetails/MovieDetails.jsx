import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ActorLink, CtaButton, Tag} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './moviedetails.style';
import images from '../../assets/images';
import icons from '../../assets/icons';

const PAST_LIVES_FEAT_IMAGE =
  'https://m.media-amazon.com/images/M/MV5BZjhmNWNiNmMtN2E2MS00MDc1LWJlMzMtYmY3NmY2YWI3MzI5XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UY281_CR0,0,500,281_.jpg';
const DEFAULT_FEAT_IMAGE =
  'https://lh3.googleusercontent.com/pw/ABLVV86LbpXIwvuPUrxDaHBvYwmW_i6FEgSWYnOT5E3s8jb7S13rR8Xi3Jyp_D1JM2OGfCW2z8hAecMiLeAVcq7JsYLaEe4RUjre6aY4OtUdoi0K6VDDDk0=w2400';
const DEFAULT_POSTER =
  'https://media.comicbook.com/files/img/default-movie.png';

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
                ? PAST_LIVES_FEAT_IMAGE
                : DEFAULT_FEAT_IMAGE
            }`,
          }}
        />
        <TouchableOpacity
          style={[styles.headerButton, styles.backButton]}
          onPress={() => navigation.goBack()}>
          <Image style={styles.backIcon} source={icons.back} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.headerButton, styles.saveButton]}>
          <Image style={styles.saveIcon} source={icons.heartEmpty} />
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
              <Image style={styles.ratingIcon} source={icons.star} />
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
                  uri: info.Poster === 'N/A' ? DEFAULT_POSTER : info.Poster,
                }}
              />
            </View>
            <View style={styles.ratingContainer}>
              <Image style={styles.ratingIcon} source={icons.film} />
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
              <ScrollView
                horizontal={true}
                scrollEnabled={info.Actors.split(', ').length >= 4}
                style={styles.movieActorsContainer}>
                {info.Actors.split(', ').map((actor, ind) => (
                  <ActorLink
                    key={ind}
                    actorName={actor}
                    actorImg={images.actorImg}
                  />
                ))}
              </ScrollView>
            )}
          </View>

          {/* CTA */}
          <View style={styles.ctaButtonsContainer}>
            <View style={styles.primaryButton}>
              <CtaButton
                buttonColor={'#FF6666'}
                imagePath={icons.heartWhite}
                text={'Add to Saved Movies'}
                textColor={'#FFFFFF'}
              />
            </View>
            <View>
              <CtaButton
                buttonColor={'#343467'}
                imagePath={icons.share}
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
