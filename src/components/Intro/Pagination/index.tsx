import React, { FC, memo, useCallback } from "react";
import { View } from "react-native";
import style from "./style";
import { SIZES, SLIDE_INTRO } from "../../../values";
import Animated, { Extrapolate, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";


const Pagination: FC<any> = (props) => {
  const { color, translationX } = props;
  const styles = style(color);

  const Item = useCallback((index: number) => {

    const animatedPagination = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
        translationX.value,
        [SIZES.WIDTH_WINDOW * (index - 1), SIZES.WIDTH_WINDOW * index, SIZES.WIDTH_WINDOW * (index + 1)],
        ["rgba(109,123,129,0.5)", "#24A8AF", "rgba(109,123,129,0.5)"]
      );

      const scale = interpolate(
        translationX.value,
        [SIZES.WIDTH_WINDOW * (index - 1), SIZES.WIDTH_WINDOW * index, SIZES.WIDTH_WINDOW * (index + 1)],
        [0.9, 1.1, 0.9],
        Extrapolate.CLAMP
      );

      return { backgroundColor, transform: [{ scale }] };
    });

    return (
      <Animated.View style={[styles.pagination, animatedPagination]} key={index.toString()} />
    );
  },[]);

  return (
    <View style={{ flexDirection: "row" }}>
      {SLIDE_INTRO.map((item, index) => Item(index))}
    </View>
  );
};

export default memo(Pagination);
