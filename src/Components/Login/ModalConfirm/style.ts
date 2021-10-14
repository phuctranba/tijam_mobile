import { moderateScale, ScaledSheet } from "react-native-size-matters";
import { SHADOW_2, SHADOW_3 } from "../../../Utils/Values/shadows";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    modal:{
      marginVertical: 0,
      marginHorizontal: 0,
      justifyContent: "flex-end"
    },
    container: {
      width: "100%",
      backgroundColor: "#fff",
      borderTopLeftRadius: "10@ms",
      paddingHorizontal: "5%",
      paddingTop: "5%",
      borderTopRightRadius: "10@ms",
    },
    txtTitle:{
      fontWeight: "bold",
      alignSelf: "center",
      fontSize: 22,
      color: "#1A1819",
      marginBottom: "15@vs"
    },
    input: {
      height: "45@ms",
      width: "13%",
      marginHorizontal:'1.5%',
      borderRadius: "8@ms",
      borderWidth: "1@ms",
      textAlign:'center',
      fontSize:"22@ms0.3",
      textAlignVertical: "center",
      color: "#4F5458",
      paddingVertical: 0,
      fontWeight:'bold'
    },
    touchButtonKeyBoard:{
      height: "40@ms",
      width: "25%",
      backgroundColor:"#24A8AF",
      borderRadius: "8@ms",
      justifyContent: 'center',
      alignItems:'center',
      ...SHADOW_3
    },
    viewRowKeyBoard:{
      width:'100%',
      marginVertical:"8@vs",
      flexDirection:'row',
      justifyContent:'space-evenly'
    },
    txtButtonKeyBoard:{
      fontSize:"22@ms0.3",
      color: "#fff",
      fontWeight:'bold'
    },
    txtDetail:{
      fontSize: "16@ms0.3",
      color: "#1A1819"
    },
    txtPhoneNumber:{
      fontWeight: "bold",
      fontSize: "18@ms0.3",
      color: "#1A1819",
      marginVertical: "8@vs"
    },
    viewDetail:{
      flexDirection: "row",
      justifyContent: "space-between"
    },
    txtCountDown:{
      fontWeight: "bold",
      alignSelf: "flex-end",
      fontSize: "34@ms0.3",
      color: "#24a8af",
      marginRight: "20@s",
      bottom: "-5@vs",
      paddingVertical: 0,
      textAlignVertical: "bottom"
    },
    containerInputCode:{
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: "25@vs"
    },
    containerKeyBoard:{
      justifyContent: "center",
      marginBottom: "16@vs",
    }
  });
};
export default styleScaled;
