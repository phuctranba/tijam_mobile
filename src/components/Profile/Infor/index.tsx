import React, { FC, memo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { GENDER } from "../../../values";
import Svg, { ClipPath, Defs, Image, LinearGradient, Path, Stop } from "react-native-svg";
import Icon from "../../Icon";
import { moderateScale, scale } from "react-native-size-matters";
import { getColorGender, getIconGender } from "../../../utils";
import moment from "moment";
import { DrawerNavigationProp } from "@react-navigation/drawer";


interface Props {
  color: any,
  nickname: string,
  name: string,
  gender: GENDER,
  dob: Date,
  selfDescribing: string,
  isGuest: boolean,
  navigation: DrawerNavigationProp<any>
}

const Infor: FC<Props> = (props) => {
  const { color, nickname, name, gender, dob, selfDescribing, isGuest, navigation } = props;
  const styles = style(color);


  return (
    <TouchableOpacity activeOpacity={0.95} style={styles.container}>
      <Svg viewBox="0 0 100 115" style={{ position: "absolute" }}>
        <Defs>
          <ClipPath id="clip">
            <Path
              d="M 0 0 l 0 85 Q 0 100 15 100 L 85 100 Q 100 100 100 115 L 100 0 Z"
              fill="#000"
            />
          </ClipPath>
        </Defs>

        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#fff" stopOpacity="0" />
            <Stop offset="0.8695" stopColor="#000" stopOpacity="1" />
          </LinearGradient>
        </Defs>

        <Image
          x="0"
          y="0"
          height={"100"}
          width={"100"}
          preserveAspectRatio="xY slice"
          href={require("../../../assets/images/img.png")}
          clipPath="url(#clip)"
        />

        <Path
          d="M 0 0 l 0 85 Q 0 100 15 100 L 85 100 Q 100 100 100 115 L 100 0 Z"
          fill="url(#grad)"
        />
      </Svg>

      <TouchableOpacity onPress={()=>navigation.openDrawer()} activeOpacity={0.95} style={[styles.routerButton, { left: scale(20) }]}>
        <Icon type={"MaterialIcons"} name={"notes"} size={moderateScale(23, 0.3)} color={color.INFOR_IC_MENU} />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")} activeOpacity={0.95} style={[styles.routerButton, { right: scale(20) }]}>
        <Icon type={"MaterialCommunityIcons"} name={isGuest ? "account-alert" : "account-edit"}
              size={moderateScale(23, 0.3)} color={isGuest ? color.INFOR_IC_REPORT : color.INFOR_IC_EDIT} />
      </TouchableOpacity>

      <View style={styles.containerInfor}>
        <Text style={styles.textNickname}>{nickname} <Icon type={"MaterialCommunityIcons"} name={getIconGender(gender)}
                                                           size={moderateScale(30, 0.3)}
                                                           color={getColorGender(gender)} /></Text>

        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textDob}>{(moment(dob)).format("DD/MM/YYYY")}</Text>

        <Text style={styles.textDescription}>{selfDescribing}</Text>
      </View>

    </TouchableOpacity>
  );
};
export default memo(Infor);
