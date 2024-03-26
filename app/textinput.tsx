/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Kaede } from 'react-native-textinput-effects';

const Page = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={[styles.card1, { backgroundColor: '#F9F7F6' }]}>
        <Kaede label={'Website'} defaultValue={'Github'} editable={false} />
        <Kaede
          style={styles.input}
          label={'Number'}
          labelStyle={{
            color: 'white',
            backgroundColor: '#fcb794',
          }}
          inputStyle={{
            color: 'white',
            backgroundColor: '#db8d67',
          }}
          keyboardType="numeric"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: 'white',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
  },
  input: {
    marginTop: 4,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
});

export default Page;
