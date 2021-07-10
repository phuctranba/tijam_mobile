import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, { Defs, Path, RadialGradient, Rect, Stop } from "react-native-svg";
import style from "./style";
import FastImage from "react-native-fast-image";
import { COLOR_TYPE, ICON_TYPE, TYPE } from "../../../values/enum";
import Icon from "../../Icon";
import { moderateScale } from "react-native-size-matters";
import NewsPost from "../../../models/NewsPost";

interface PropsItem {
  item: NewsPost,
  color: any
}

const MarkerPost: FC<PropsItem> = (props) => {
  const { color } = props;
  const { avatar, label, type } = props.item;
  const styles = style(color);

  const renderIcon = (type: TYPE) => {
    switch (type) {
      case TYPE.AFFECTION:
        return ICON_TYPE.AFFECTION;
      case TYPE.TRAFFIC:
        return ICON_TYPE.TRAFFIC;
      case TYPE.HEALTH:
        return ICON_TYPE.HEALTH;
      case TYPE.SCHOOL:
        return ICON_TYPE.SCHOOL;
      case TYPE.CUISINE:
        return ICON_TYPE.CUISINE;
      case TYPE.SPIRITUALITY:
        return ICON_TYPE.SPIRITUALITY;
    }
  };

  const renderColor = (type: TYPE) => {
    switch (type) {
      case TYPE.AFFECTION:
        return COLOR_TYPE.AFFECTION;
      case TYPE.TRAFFIC:
        return COLOR_TYPE.TRAFFIC;
      case TYPE.HEALTH:
        return COLOR_TYPE.HEALTH;
      case TYPE.SCHOOL:
        return COLOR_TYPE.SCHOOL;
      case TYPE.CUISINE:
        return COLOR_TYPE.CUISINE;
      case TYPE.SPIRITUALITY:
        return COLOR_TYPE.SPIRITUALITY;
    }
  };

  return (
    <TouchableOpacity
      style={{ height: moderateScale(64) }}>

      {/*background marker*/}
      <Svg width="100%" height="75%" style={{ position: "absolute" }}>

        {/*rect content*/}
        <Svg width="100%" height="100%" style={{ position: "absolute" }}>
          <Defs>
            <RadialGradient id="grad" cx="50%" cy={`${moderateScale(38)}`} rx="50%" ry={`${moderateScale(19)}`}
                            gradientUnits="userSpaceOnUse">
              <Stop offset="0.7" stopColor="#000" stopOpacity="0.7" />
              <Stop offset="1" stopColor="#000" stopOpacity="0.1" />
            </RadialGradient>
          </Defs>
          <Rect x="0" y={`${moderateScale(2)}`} width="100%" height={`${moderateScale(38)}`} fill="url(#grad)"
                rx={moderateScale(20)} />
        </Svg>

        <Svg width="100%" height="100%" style={{ position: "absolute" }}>
          <Rect x="1%" y="0" width="98%" height={`${moderateScale(38)}`} fill="#fff" rx={moderateScale(20)} />
        </Svg>

        {/*arrow*/}
        <Svg width="100%" height="100%" viewBox="0 0 100 100" style={{ position: "absolute" }}>
          <Defs>
            <RadialGradient id="grad" cx="50%" cy={`${moderateScale(38)}`} rx="50%" ry={`${moderateScale(19)}`}
                            gradientUnits="userSpaceOnUse">
              <Stop offset="0.7" stopColor="#000" stopOpacity="0.7" />
              <Stop offset="1" stopColor="#000" stopOpacity="0.1" />
            </RadialGradient>
          </Defs>

          <Path d="M 33 80 L 67 80 L 50 100 z" fill="url(#grad)" />
          <Path d="M 33 75 L 67 75 L 50 95 z" fill="#fff" />
        </Svg>

      </Svg>

      {/*Icon type*/}
      <View style={[styles.viewIconBottom, { backgroundColor: renderColor(type) }]}>
        <Icon type={"MaterialCommunityIcons"} name={renderIcon(type)} size={moderateScale(10, 0.3)}
              color={color.MARKER_IC} />
      </View>

      {/*Content*/}
      <View style={styles.viewContent}>
        <FastImage
          style={styles.avatar}
          source={{
            uri: avatar,
            priority: FastImage.priority.normal
          }}
          resizeMode={"cover"}
        />

        <Text allowFontScaling={false} numberOfLines={2}
              style={[styles.labelMarker, { color: renderColor(type) }]}>{label.replace(" ","\n")}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(MarkerPost);
