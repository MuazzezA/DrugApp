import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginStack from "./login-stack";
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='login-stack' component={LoginStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
