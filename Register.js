import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInputControl from './TextInputControl';

const Register = () => {
  return (
    <View style={styles.container}>
      <TextInputControl
        inputIcon={{
          name: 'person',
          size: 50,
          color: 'red',
        }}
        placeholder="Enter your name"
        containerStyle={{
          paddingBottom: 10,
          borderWidth:2
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Register;
