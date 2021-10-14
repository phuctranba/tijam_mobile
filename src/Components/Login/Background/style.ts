import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: SIZES.WIDTH_WINDOW * 2,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      justifyContent:'center'
    },
    circle1: {
      width: SIZES.WIDTH_WINDOW*1.1,
      height: "55%",
      borderRadius: "200@ms",
      backgroundColor: "rgba(36,168,175,0.1)",
      position: "absolute",
      top: "-10%",
      left: -SIZES.WIDTH_WINDOW * 0.2
    },
    circle2: {
      width: SIZES.WIDTH_WINDOW * 1.5,
      height: "85%",
      borderRadius: "400@ms",
      backgroundColor: "rgba(36,168,175,0.05)",
      position: "absolute",
      bottom: "-5%",
      left: SIZES.WIDTH_WINDOW * 0.4
    },
    circle3: {
      width: SIZES.WIDTH_WINDOW*0.9,
      height: "50%",
      borderRadius: "300@ms",
      backgroundColor: "rgba(36,168,175,0.1)",
      position: "absolute",
      top: "5%",
      right: -SIZES.WIDTH_WINDOW * 0.5
    }
  });
};
export default styleScaled;
