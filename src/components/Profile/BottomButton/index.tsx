import React, { FC, memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import Icon from "../../Icon";
import { moderateScale, scale } from "react-native-size-matters";
import { DrawerNavigationProp } from "@react-navigation/drawer";


interface Props {
  color: any,
  isFollowed: boolean,
  navigation: DrawerNavigationProp<any>
}

const BottomButton: FC<Props> = (props) => {
  const { color, isFollowed, navigation } = props;
  const styles = style(color);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9}
                        style={[styles.touchButton, { backgroundColor: isFollowed ? color.BOTTOMBUTTON_BG_BIGBUTTON_UNFOLLOW : color.BOTTOMBUTTON_BG_BIGBUTTON_FOLLOW }]}>
        <Icon type={"MaterialCommunityIcons"} name={isFollowed ? "eye-minus" : "eye-plus"} size={moderateScale(23, 0.3)}
              color={isFollowed ? color.BOTTOMBUTTON_IC_EYEMINUS : color.BOTTOMBUTTON_IC_EYEPLUS} />
        <Text
          style={[styles.textBigButton, { color: isFollowed ? color.BOTTOMBUTTON_TXT_BIGBUTTON_UNFOLLOW : color.BOTTOMBUTTON_TXT_BIGBUTTON_FOLLOW }]}>{isFollowed ? "Bỏ theo dõi" : "Theo dõi"}</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity activeOpacity={0.9} style={[styles.touchButton, { marginRight: scale(15) }]}>
          <Icon type={"MaterialCommunityIcons"} name={"account-arrow-right"} size={moderateScale(23, 0.3)}
                color={color.BOTTOMBUTTON_IC_BOTTOM} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} style={styles.touchButton}>
          <Icon type={"MaterialCommunityIcons"} name={"contacts"} size={moderateScale(23, 0.3)}
                color={color.BOTTOMBUTTON_IC_BOTTOM} />
        </TouchableOpacity>
      </View>

    </View>
  );
};
export default memo(BottomButton);
