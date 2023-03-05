import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/login";
const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName='login-screen'>
      <Stack.Screen name='login-screen' component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default LoginStack;
