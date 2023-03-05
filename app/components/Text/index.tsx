import React from "react";
import { Text as RNText, View } from "react-native";
import style from "./style";

type TextProps = {
  text?: string;
  children?: React.ReactNode;
  overrideStyle?: object;
  overrideTextStyle?: object;
};

export function Text(props: TextProps) {
  const mergedStyle = [style.root, props.overrideStyle];
  const content = props.children || props.text;
  return (
    <View style={mergedStyle}>
      <RNText
        allowFontScaling={false}
        style={[style.text, props.overrideTextStyle]}>
        {content}
      </RNText>
    </View>
  );
}
