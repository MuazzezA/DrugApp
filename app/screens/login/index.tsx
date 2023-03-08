import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Text } from "../../components";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#eefddd" }}>
      <Text>Login Screen</Text>
    </View>
  );
};
export default LoginScreen;
