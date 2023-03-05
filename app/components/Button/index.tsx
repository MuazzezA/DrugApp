import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import style from "./style";

export type ButtonProps = {
  text: String;
  onClick?: () => void;
  overrideStyle?: Object;
};

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity style={style.root} onPress={() => console.log("press")}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
}
