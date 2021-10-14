import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../Utils/Values";
import { SHADOW_3 } from "../../Utils/Values/shadows";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: SIZES.WIDTH_WINDOW
    },
    logo: {
      width: SIZES.WIDTH_WINDOW * 0.3,
      height: SIZES.WIDTH_WINDOW * 0.3,
      marginTop: "80@vs",
      marginBottom: "40@vs"
    },

  });
};
export default styleScaled;
