// import React from 'react';
// import {Text, View} from 'react-native';
// // import {Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import CustomComponent from "./CustomComponent";
import Register from "./Register";

// const YourApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Try editing me! 🎉</Text>
//       <Text>
//         <Icon name="person" size={50} color="blue" />
//       </Text>
//     </View>
//   );
// };

// export default YourApp;




const App = () => {
  const customProps = {
    backgroundColor: 'red',
    textColor: 'white',
    text: 'Hello World!'
  };

  return (
    // <CustomComponent {...customProps} />
    <Register/>
  );
}

export default App;
