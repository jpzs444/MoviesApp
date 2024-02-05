import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: 80,
    marginRight: 30,
  },
  actorImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 70,
    alignSelf: 'center',
  },
  actorImage: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 70,
  },
  actorName: {
    marginTop: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: '#141313',
  },
});
