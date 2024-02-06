import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    opacity: 0.65,
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
