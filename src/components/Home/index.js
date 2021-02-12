import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.child}>
        <Text style={styles.text}>TuShop</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed go live')}>
          Go Live
        </Button>
      </View>
    </View>
  );
};

export default Home;
