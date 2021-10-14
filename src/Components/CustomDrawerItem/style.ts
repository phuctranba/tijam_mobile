import { ScaledSheet } from "react-native-size-matters";

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: "10@vs",
      marginVertical: "8@vs"
    },
    containerBottom:{
      flexDirection:'row',
      alignItems:'center',
      width:"100%"
    },
    stroke:{
      width:"2@s",
      height:"20@vs",
      backgroundColor:'white',
      marginHorizontal: "15@s"
    },
    icon: {
      minWidth: "62@s",
      alignItems: "center"
    },
    title: {
      color: "rgba(255,255,255,0.63)",
      fontWeight: "600"
    }
  });
};
export default styleScaled;
