import {StyleSheet} from 'react-native';

const styles = {
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  child: {
    width: '100%',
    height: '100%',
    backgroundColor: '#a0c4ff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // borderRadius: 10,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
  jokeText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    padding: 10,
  },
};

export default StyleSheet.create(styles);
