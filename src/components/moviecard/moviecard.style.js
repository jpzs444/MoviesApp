import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    width: 180,
    height: 267,
    position: 'relative',
    elevation: 3,
    shadowColor: '#000000',
    backgroundColor: '#FDFDFD',
  },
  moviePoster: {
    width: 180,
    height: 267,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  moviePosterGradient: {
    width: '100%',
    height: 137,
    borderRadius: 8,
    position: 'absolute',
    bottom: 0,
  },
  movieTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    color: '#FDFDFD',
    padding: 12,
    position: 'absolute',
    bottom: 0,
  },
  saveButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FDFE',
    borderRadius: 50,
    position: 'absolute',
    top: 12,
    right: 12,
    elevation: 5,
    shadowColor: '#000000',
  },
  saveIcon: {
    width: 18,
    height: 18,
    resizeMode: 'cover',
  },
});
