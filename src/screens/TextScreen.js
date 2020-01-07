import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const TextScreen = () => {
  const [userInput, setUserInput] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  return (
    <View>
      <Text>Enter your name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newValue => setUserInput(newValue)}
        value={userInput}
      />
      <Text>My name is {userInput}</Text>
      <Text>Enter your password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newText => setUserPassword(newText)}
        value={userPassword}
      />

      {userPassword.length > 5 ? null : (
        <Text>Password must be longer than 5 characters</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
export default TextScreen;
