import React, {useState} from 'react';
import axios from 'axios';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';

const Home = () => {
  const [joke, setJoke] = useState('');

  return (
    <View style={styles.parent}>
      <View style={styles.child}>
        <Text style={styles.text}>Jokes by Aarush</Text>

        <Button
          mode="contained"
          onPress={() => {
            console.log('Pressed get joke');
            axios
              .get('http://api.icndb.com/jokes/random')
              .then((res) => res.data)
              .then((res) => setJoke(res.value.joke))
              .catch((err) => console.log(err));
          }}>
          Get Joke
        </Button>
        {joke === '' ? null : <Text style={styles.jokeText}>{joke}</Text>}
      </View>
    </View>
  );
};

export default Home;
