import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: SIZES.WIDTH_WINDOW
    }
  });
};
export default styleScaled;
