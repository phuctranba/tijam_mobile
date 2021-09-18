import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: SIZES.WIDTH_WINDOW
    },
    logo:{
      width: SIZES.WIDTH_WINDOW * 0.3,
      height: SIZES.WIDTH_WINDOW * 0.3,
      marginVertical:"80@vs"
    }
  });
};
export default styleScaled;
