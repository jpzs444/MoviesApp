import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
