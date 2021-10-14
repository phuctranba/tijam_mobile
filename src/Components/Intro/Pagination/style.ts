import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    pagination: {
      width: '12@ms',
      height: "12@ms",
      borderRadius:'10@ms',
      alignItems: "center",
      marginHorizontal: "8@s",
    }
  });
};
export default styleScaled;
