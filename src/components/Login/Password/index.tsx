import React, { FC, memo } from "react";
import { View, Text } from "react-native";
import style from "./style";
import { SIZES } from "../../../values";
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from "react-native-reanimated";


const Password: FC<any> = (props) => {
  const { color } = props;
  const styles = style(color);

  return (
    <View style={styles.container}>
      <Text>Password</Text>
    </View>
  );
};

export default memo(Password);