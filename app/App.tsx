import React from "react";

import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./navigators/app-stack";

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
