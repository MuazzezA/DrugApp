import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginStack from "./login-stack";
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='login-stack' component={LoginStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
