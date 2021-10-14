import { moderateScale, ScaledSheet } from "react-native-size-matters";
import { SHADOW_3, SHADOW_5 } from "../../../Utils/Values/shadows";
import { SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    viewIconBottom: {
      height: "16@ms",
      width:"16@ms",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "20@ms",
      position: "absolute",
      bottom: 0,
      alignSelf: "center"
    },
    viewContent:{
      height:"38@ms",
      flexDirection: "row",
      alignItems: "center"
    },
    avatar:{
      width: "27@ms",
      height: "27@ms",
      borderRadius: "20@ms",
      marginHorizontal: "6@ms"
    },
    labelMarker:{
      marginRight: "8@ms",
      marginLeft:"2@ms",
      fontSize:"10@ms0.3",
      textAlign:'center'
    }

  });
};
export default styleScaled;
