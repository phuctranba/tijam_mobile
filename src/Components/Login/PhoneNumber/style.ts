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
    viewInput: {
      zIndex: 1,
      height: "50@ms",
      width: "100%",
      borderTopLeftRadius: "8@ms",
      borderTopRightRadius: "8@ms",
      borderWidth: "1@ms",
      backgroundColor: "#fff",
      flexDirection: "row",
      borderTopColor: "#24A8AF",
      borderLeftColor: "#24A8AF",
      borderRightColor: "#24A8AF"
    },
    txtCountryValue: {
      fontWeight: "bold",
      fontSize: "18@ms0.3",
      color: "#5B6CA8"
    },
    pressCountryCode: {
      width: "33%",
      height: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: "15@s",
      paddingRight: "10@s",
      flexDirection: "row"
    },
    input: {
      width: "67%",
      fontWeight: "bold",
      textAlignVertical: "center",
      fontSize: "18@ms0.3",
      color: "#4F5458",
      paddingVertical: 0
    },
    pickerStyle: {
      zIndex: -1,
      height: "50@ms",
      width: 0,
      opacity: 0
    },
    dropdownContainerStyles: {
      borderRadius: "8@ms",
      borderColor: "#24A8AF",
      borderLeftWidth: 1,
      borderBottomWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 0,
      ...SHADOW_3
    },
    dropdownContainer: {
      position: "absolute",
      width: "100%"
    },
    txtLabel: {
      fontSize: "18@ms0.3",
      color: "#5B6CA8"
    },
    txtDropdownStyle: {
      fontSize: "18@ms0.3",
      color: "#5B6CA8"
    }
  });
};
export default styleScaled;
