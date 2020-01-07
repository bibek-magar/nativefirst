import React from 'react';
import {Button, Text, View} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, counter: state.counter + action.payload};

    case 'DECREMENT':
      return {...state, counter: state.counter - action.payload};

    default:
      return state;
  }
};
export default function CouterScreen() {
  const [state, dispatch] = React.useReducer(reducer, {counter: 0});
  const {counter} = state;
  return (
    <View>
      <Button
        title="+"
        onPress={() => dispatch({type: 'INCREMENT', payload: 5})}
      />
      <Text>{counter}</Text>
      <Button
        title="-"
        onPress={() => dispatch({type: 'DECREMENT', payload: 5})}
      />
    </View>
  );
}
