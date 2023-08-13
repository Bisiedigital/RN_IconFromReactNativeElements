import React from 'react';
import {View, Text} from 'react-native';

const CustomComponent = props => {
  return (
    <View style={{backgroundColor: props.backgroundColor, padding: 10}}>
      <Text style={{color: props.textColor}}>{props.text}</Text>
    </View>
  );
};

export default CustomComponent;
