import { ScaledSheet } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";

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
    decriptionDisplayName: {
      fontSize: "17@ms0.3",
      color: "#1A1819"
    },
    displayName: {
      fontSize: "18@ms0.3",
      color: "#1A1819",
      fontWeight: 'bold',
      width:'100%'
    },
    avatar: {
      width: "90@ms",
      height: "90@ms",
      borderRadius: "8@ms",
      borderColor: "#24a8af",
      borderWidth: "1@ms",
      backgroundColor: "#ffffff"
    },
    viewDisplayName:{
      marginHorizontal: "5%",
      justifyContent: "space-evenly"
    },
    iconReverse:{
      fontSize: "22@ms0.3",
      color: "#1A1819",
      paddingHorizontal: "10@s"
    },
    hitSlop:{
      top: "30@ms",
      bottom: "30@ms",
      left: "20@ms",
      right: "20@ms"
    },
    viewInput:{
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between"
    },
    input: {
      backgroundColor: "#fff",
      paddingHorizontal: "15@s",
      height: "50@ms",
      textAlignVertical: "center",
      fontSize: "18@ms0.3",
      color: "#4F5458",
      paddingVertical: 0,
      borderRadius: "8@ms",
      borderColor: "#24a8af",
      borderWidth: "1@ms",
      marginVertical: "24@vs"
    }
  });
};
export default styleScaled;
