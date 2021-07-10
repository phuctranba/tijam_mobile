import { ScaledSheet } from "react-native-size-matters";
import { SHADOW_3, SHADOW_5 } from "../../values/shadows";
import { SIZES } from "../../values";
import { StyleSheet } from "react-native";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width: "100%",
      backgroundColor:'transparent'
    },
    map: {
      zIndex: -1,
      ...StyleSheet.absoluteFillObject
    },
  });
};
export default styleScaled;
