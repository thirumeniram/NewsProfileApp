

import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import  AppNavigation  from './Navigation/AppNavigation'; // Adjust the path as necessary
 // Adjust the path as necessary
import Context from './Api/ContextApi'; // Adjust the path as necessary
import { extendTheme } from 'native-base';


const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Context>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Context>
    </NativeBaseProvider>
  );
}

export default App;

const theme = extendTheme({
  colors: {
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      500: '#2196f3',
      700: '#1976d2',
    },
    accent: {
      400: '#ff5722',
    },
    background: {
      light: '#ffffff',
      dark: '#121212',
    },
    text: {
      light: '#000000',
      dark: '#ffffff',
    },
  },
});


  