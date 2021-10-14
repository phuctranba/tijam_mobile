import React, { FC, memo, useCallback } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { COLOR_TYPE, ICON_TYPE, SIZES } from "../../../Utils/Values";
import { SHADOW_2, SHADOW_3 } from "../../../Utils/Values/shadows";
import NewsPost from "../../../Models/news-post";
import Icon from "../../BaseComponents/Icon";
import moment from "moment";
import FastImage from "react-native-fast-image";
import { convertBigNumber } from "../../../Utils/Helpers";
import LinearGradient from "react-native-linear-gradient";
import { IC_COUNT_SIZE, IC_DURA_SIZE } from "./style";


interface ItemProps {
  item: NewsPost,
  expandAnimated: Function,
  expand: boolean,
  styles: object,
  color:any
}

const Item: FC<ItemProps> = ({ item, expandAnimated, expand, styles, color }) => {

  const totalMinutes = moment(item.duration).diff(new Date(), "minutes");
  const expandView = useCallback(() => {
    if (!expand)
      expandAnimated();
  }, [expand]);

  return (

    <Pressable
      onPress={expandView}
      style={styles.pressableItem}>
      <View
        style={styles.containerItem}>

        {/*duration*/}
        <View style={[styles.viewDuration,{backgroundColor: COLOR_TYPE[item.type],}]}>
          <Icon type={"MaterialCommunityIcons"} name={ICON_TYPE[item.type]} color={color.LISTPOST_IC_TYPE} size={IC_DURA_SIZE} />
          <Text style={styles.txtDuration}>{Math.floor(totalMinutes / 60)}:{totalMinutes % 60}</Text>
        </View>

        {/*header*/}
        <View style={styles.viewHeader}>
          <FastImage
            style={styles.avatar}
            source={{
              uri: item.avatar,
              priority: FastImage.priority.normal
            }}
            resizeMode={"cover"}
          />

          {/*nickname and time create*/}
          <View style={styles.viewInfor}>
            <Text style={styles.txtNickname} numberOfLines={1}
                  ellipsizeMode={"tail"}>{item.nickname}</Text>
            <Text style={styles.txtCreateTs}>{moment(item.create_ts).format("HH:mm  DD/MM/yyyy")}</Text>
          </View>

        </View>

        <Text style={styles.txtCount}>
          <Icon type={"FontAwesome5"} solid name={"eye"} size={IC_COUNT_SIZE} color={color.LISTPOST_IC_COUNT} />
          {" " + convertBigNumber(item.view) + "    "}
          <Icon type={"FontAwesome5"} solid name={"star"} size={IC_COUNT_SIZE} color={color.LISTPOST_IC_COUNT} />
          {" " + convertBigNumber(item.notice) + "    "}
          <Icon type={"FontAwesome5"} solid name={"share"} size={IC_COUNT_SIZE} color={color.LISTPOST_IC_COUNT} />
          {" " + convertBigNumber(item.share)}
        </Text>

        <ScrollView scrollEnabled={expand} showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
          <Text style={styles.txtLabel}>{item.label}</Text>
          <Text style={styles.txtTag}>#home #vietnam #QuyetThang</Text>
          <Text style={styles.txtContent}>{item.content}</Text>
          {item.image != null && item.image != "" ?
            <FastImage
              style={[styles.image,{height: item.image_height}]}
              source={{
                uri: item.image,
                priority: FastImage.priority.normal
              }}
              resizeMode={"contain"}
            /> : null}
        </ScrollView>

        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                        colors={["#00000000", color.LISTPOST_LG]} locations={[0, 0.9]}
                        pointerEvents={"none"}
                        style={[styles.viewLinear,{ opacity: expand ? 0 : 1 }]} />
      </View>
    </Pressable>

  );
};

export default memo(Item);
