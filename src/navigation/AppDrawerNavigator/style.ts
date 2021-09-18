import { moderateScale, ScaledSheet, verticalScale } from "react-native-size-matters";
import { SIZES } from "../../values";
import { SHADOW_3 } from "../../values/shadows";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: "transparent",
      paddingBottom: "25@vs",
      overflow: "visible",
      justifyContent: "center"
    },
    containerHeader:{
      position: "absolute",
      elevation: 1,
      zIndex: 2,
      top: SIZES.HEIGHT_PADDINGTOP,
      left: -SIZES.WIDTH_WINDOW
    },
    containerBottom:{
      position: "absolute",
      zIndex: 1,
      bottom: "16@vs",
      left: -SIZES.WIDTH_WINDOW
    },
    viewHeader:{
      flexDirection: "row",
      alignItems: "center",
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.65
    },
    viewBottom:{
      flexDirection: "row",
      alignItems: "center",
    },
    txtBottom:{
      color: "#fff",
      fontSize: "18@ms0.3"
    },
    avatar:{
      height: "48@s",
      width: "48@s",
      borderRadius: "25@s",
      backgroundColor: "white",
      marginHorizontal: "20@s",
      ...SHADOW_3
    },
    txtNickname:{
      fontSize: "22@ms0.3",
      fontWeight: "bold",
      color: "#fff"
    },
    txtName:{
      color: "#fff",
      fontSize: "15@ms0.3"
    },
    containerDrawer:{
      backgroundColor: "#24A8AF",
      flex: 1
    },
    drawerStyle:{
      width: "65%",
      backgroundColor: "transparent",
      marginRight: "-30@s"
    },
    sceneContainerStyle:{
      backgroundColor: "transparent",
      overflow: "visible",
      // paddingVertical: '20%',
      alignSelf: "center",
      zIndex: 1
    }
  });
};
export default styleScaled;
