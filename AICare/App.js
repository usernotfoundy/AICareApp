import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FlashScreen from './Get_Started_Screen/FlashScreen';
import GetStarted1 from './Get_Started_Screen/GetStarted1';
import GetStarted2 from './Get_Started_Screen/GetStarted2';
import GetStarted3 from './Get_Started_Screen/GetStarted3';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import FlashScreen2 from './Dashboard/FlashScreen2';
import Home from './Dashboard/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FlashScreen" component={FlashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarted1" component={GetStarted1} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarted2" component={GetStarted2} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarted3" component={GetStarted3} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="FlashScreen2" component={FlashScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
