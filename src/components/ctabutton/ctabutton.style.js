import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000000',
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },
});
