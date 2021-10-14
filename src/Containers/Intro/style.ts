import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { SHADOW_2 } from "../../Utils/Values/shadows";
import { SIZES } from "../../Utils/Values";
import { StyleSheet } from "react-native";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: "100%",
      width: "100%",
      backgroundColor: "transparent"
    },
    skipTouch: {
      position: "absolute",
      right: "30@s",
      top: SIZES.HEIGHT_PADDINGTOP + verticalScale(20),
      zIndex: 1
    },
    skipTxt: {
      fontSize: "20@ms0.3",
      fontWeight: "bold",
      color: "#1A1819"
    },
    viewRouter: {
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center"
    },
    routerTouch: {
      width: "65@ms",
      height: "38@ms",
      borderRadius: "10@ms",
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOW_2
    }
  });
};
export default styleScaled;
