import { ScaledSheet, verticalScale } from "react-native-size-matters";
import { SIZES } from "../../values";
import { SHADOW_3 } from "../../values/shadows";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    routerButton:{
      width:"46@ms",
      height:"46@ms",
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "25@ms",
      left:'20@s',
      position: "absolute",
      top: SIZES.HEIGHT_PADDINGTOP + verticalScale(15),
      ...SHADOW_3
    },

  });
};
export default styleScaled;
