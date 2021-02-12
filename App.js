/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  // View,
  // Text,
  StatusBar,
} from 'react-native';

// import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './src/components/Home';
import {Provider as PaperProvider} from 'react-native-paper';
import {Appbar} from 'react-native-paper';

// ignore
const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <PaperProvider>
        <Appbar style={styles.bottom}>
          <Appbar.Action
            icon="archive"
            onPress={() => console.log('Pressed archive')}
          />
          <Appbar.Action
            icon="mail"
            onPress={() => console.log('Pressed mail')}
          />
          <Appbar.Action
            icon="label"
            onPress={() => console.log('Pressed label')}
          />
          <Appbar.Action
            icon="delete"
            onPress={() => console.log('Pressed delete')}
          />
        </Appbar>
        <Home />
      </PaperProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default App;
