import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../values";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      width: SIZES.WIDTH_WINDOW,
      paddingHorizontal:'10%'
    },
    bigTxt:{
      fontWeight:'bold',
      fontSize:'35@ms0.3',
      color:'#24a8af',
    },
    smallTxt:{
      marginVertical:'18@vs',
      fontSize:'18@ms0.3',
      color:'#1A1819',
    },

  });
};
export default styleScaled;
