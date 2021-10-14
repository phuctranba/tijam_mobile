import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";
import { SHADOW_3 } from "../../../Utils/Values/shadows";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: SIZES.WIDTH_WINDOW,
      paddingHorizontal: "10%"
    },
    bigTxt: {
      fontWeight: "bold",
      fontSize: "33@ms0.3",
      color: "#24a8af"
    },
    smallTxt: {
      marginVertical: "18@vs",
      fontSize: "17@ms0.3",
      color: "#1A1819"
    },
    input: {
      backgroundColor:'#fff',
      width: "100%",
      paddingHorizontal: "15@s",
      height: "50@ms",
      textAlignVertical: "center",
      fontSize: "18@ms0.3",
      color: "#4F5458",
      paddingVertical: 0,
      borderRadius:'8@ms',
      borderColor:"#24a8af",
      borderWidth: "1@ms",
      marginBottom:'15@vs'
    }
  });
};
export default styleScaled;
