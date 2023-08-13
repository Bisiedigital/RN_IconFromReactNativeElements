
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';

const Control = props => {
  const {children, inputIcon, containerStyle} = props;

  
  return (
    <View style={[styles.container, containerStyle]}>
      {inputIcon && (
        <Icon
          name={inputIcon.name}
          size={inputIcon.size}
          color={inputIcon.color}
          containerStyle={styles.iconContainerStyle}
        />
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  iconContainerStyle: {
    marginRight: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
});

export default Control;
