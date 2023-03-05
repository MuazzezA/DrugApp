import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Text } from "../../components";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "red", height: 300, width: 200 }}>
      <Text>Login Screen</Text>
    </View>
  );
};
export default LoginScreen;
