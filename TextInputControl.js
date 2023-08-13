import React from 'react';
import {TextInput} from 'react-native';

import Control from './Control';

const TextInputControl = props => {
  return (
    <Control {...props}>
      <TextInput placeholder={props.placeholder} />
    </Control>
  );
};

TextInputControl.defaultProps = {
  placeholder: '',
};

export default TextInputControl;
