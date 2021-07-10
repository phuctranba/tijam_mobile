import React,{ FC } from "react";
import { Text, View } from "react-native";
import { SIZES } from "../../values";

const DetailScreen: FC<any> = () => {
  return (
    <View style={{ width: SIZES.WIDTH_WINDOW, height: SIZES.HEIGHT_WINDOW, alignItems: "center", justifyContent: "center", backgroundColor:'white' }}>
      <Text>Detail Screen</Text>
    </View>
  );
};
export default DetailScreen;
