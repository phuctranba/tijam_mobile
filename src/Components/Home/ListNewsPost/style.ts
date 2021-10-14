import { moderateScale, ScaledSheet, verticalScale } from "react-native-size-matters";
import { SIZES } from "../../../Utils/Values";
import { SHADOW_2, SHADOW_3 } from "../../../Utils/Values/shadows";

export const SIZE_ITEM = SIZES.WIDTH_WINDOW;
export const HEIGHT_ITEM_BIG = verticalScale(500);
export const HEIGHT_ITEM_SMALL = verticalScale(220);
export const HEIGHT_ITEM_MEDIUM = verticalScale(80);
export const HEIGHT_SPRING_TOP = verticalScale(300);
export const HEIGHT_SPRING_BOTTOM = verticalScale(-50);
export const SIZE_IC_INFO = moderateScale(14, 0.3);

const styleScaled = (Color: any) => {
  return ScaledSheet.create({
    containerTransitioning: {
      width: SIZE_ITEM,
      position: "absolute",
      bottom: 0
    },
    containerDrag: {
      width: "50@s",
      height: "35@vs",
      paddingBottom: "10@vs",
      paddingTop: "20@vs",
      alignSelf: "center"
    },
    viewDrag: {
      width: "100%",
      height: "5@vs",
      backgroundColor: Color.LISTPOST_BG_DRAG,
      borderRadius: "10@ms"
    },
    viewStar: {
      position: "absolute",
      width: "300@s",
      height: "300@s",
      justifyContent: "center",
      alignItems: "center"
    },
    containerItem: {
      width: SIZES.WIDTH_WINDOW,
      borderRadius: "15@ms",
      backgroundColor: Color.LISTPOST_BG_CONTAINER_ITEM,
      paddingHorizontal: "5%",
      alignItems: "center",
      paddingBottom: "15@vs",
      ...SHADOW_3
    },
    viewDuration: {
      position: "absolute",
      top: 0,
      right: 0,
      borderTopRightRadius: "15@ms",
      borderBottomLeftRadius: "15@ms",
      paddingVertical: "6@vs",
      paddingHorizontal: "14@s",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    txtDuration: {
      color: Color.LISTPOST_TXT_DURATION,
      marginLeft: "6@s",
      fontSize: "15@ms0.3"
    },
    viewHeaderItem: {
      flexDirection: "row",
      width: "100%",
      height: "50@vs",
      marginTop: "30@vs",
      alignItems: "center"
    },
    avatar: {
      borderRadius: "8@ms",
      width: "46@vs",
      height: "46@vs",
      ...SHADOW_3
    },
    txtHeader: {
      marginLeft: "10@s",
      flex: 1
    },
    txtNickname: {
      fontSize: "19@ms0.3",
      fontWeight: "bold",
      marginBottom: "2@vs",
      color: Color.LISTPOST_TXT_NICK
    },
    txtCreateTs: {
      fontSize: "15@ms0.3",
      color: Color.LISTPOST_TXT_CREATETS
    },
    hitSlop: {
      top: "15@vs",
      left: "15@s",
      bottom: "15@vs",
      right: "15@s"
    },
    viewCloseBtn: {
      marginLeft: "15@s",
      borderRadius: "5@ms",
      width: "30@s",
      height: "30@s",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Color.LISTPOST_BG_CLOSE_BTN,
      ...SHADOW_2
    },
    txtCountInfor: {
      fontSize: "14@ms0.3",
      width: "100%",
      textAlign: "right",
      color: Color.LISTPOST_TXT_COUNT_INFOR
    },
    txtLabel: {
      fontSize: "19@ms0.3",
      fontWeight: "bold",
      color: Color.LISTPOST_TXT_LABEL
    },
    txtTag: {
      fontSize: "16@ms0.3",
      color: Color.LISTPOST_TXT_TAG,
      marginBottom: "5@vs"
    },
    txtContent: {
      fontSize: "16@ms0.3",
      color: Color.LISTPOST_TXT_CONTENT,
      lineHeight: "22@vs"
    },
    image: {
      borderRadius: "5@ms",
      width: "100%",
      marginTop: "15@vs"
    },
    viewLinearGD: {
      height: "100@vs",
      width: "100%",
      position: "absolute",
      bottom: "15@vs"
    }
  });
};
export default styleScaled;
