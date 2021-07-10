import React, { FC, memo, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { COLOR_TYPE, ICON_TYPE, SIZES } from "../../../values";
import { SHADOW_2, SHADOW_3 } from "../../../values/shadows";
import NewsPost from "../../../models/NewsPost";
import Icon from "../../Icon";
import moment from "moment";
import FastImage from "react-native-fast-image";
import { convertBigNumber } from "../../../utils";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";

interface ItemProps {
  item: NewsPost,
  expand: boolean,
  expandAnimated: Function,
}

const Item: FC<ItemProps> = ({ item, expand, expandAnimated }) => {

  const totalMinutes = moment(item.duration).diff(new Date(), "minutes");

  const expandView = useCallback(() => expandAnimated(), []);

  return (
    <Pressable
      disabled={expand}
      onPress={expandView}
      style={{ width: SIZES.WIDTH_WINDOW }}>

      <View style={[{
        flex: 1,
        borderRadius: 15,
        backgroundColor: "#fff",
        paddingHorizontal: "5%",
        maxHeight: expand ? 500 : 220,
        transform: [{ scale: expand ? 0.95 : 0.85 }],
        ...SHADOW_3
      }]}>


        {/*duration*/}
        <View style={{
          position: "absolute",
          top: 0,
          right: 0,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          backgroundColor: COLOR_TYPE[item.type],
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 6,
          paddingHorizontal: 14
        }}>
          <Icon type={"MaterialCommunityIcons"} name={ICON_TYPE[item.type]} color={"#fff"} size={18} />
          <Text style={{
            color: "#fff",
            marginLeft: 6,
            fontSize: 16
          }}>{Math.floor(totalMinutes / 60)}:{totalMinutes % 60}</Text>
        </View>

        <View style={{
          flexDirection: "row",
          width: "100%",
          height: 50,
          marginTop: 30,
          alignItems: "center"
        }}>
          <FastImage
            style={{ borderRadius: 8, width: 46, height: 46, ...SHADOW_3 }}
            source={{
              uri: item.avatar,
              priority: FastImage.priority.normal
            }}
            resizeMode={"cover"}
          />

          {/*nickname and time create*/}
          <View style={{ marginLeft: 10, flex: 1 }}>
            <Text style={{ fontSize: 19, fontWeight: "bold", marginBottom: 2 }} numberOfLines={1}
                  ellipsizeMode={"tail"}>{item.nickname}</Text>
            <Text style={{ fontSize: 15 }}>{moment(item.create_ts).format("HH:mm  DD/MM/yyyy")}</Text>
          </View>

          {/*close btn*/}
          <Pressable
            disabled={!expand}
            onPress={expandView}
            hitSlop={{ top: 15, left: 15, bottom: 15, right: 15 }}
            style={[{
              marginLeft: 15,
              borderRadius: 5,
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              opacity: expand ? 1 : 0,
              ...SHADOW_2
            }]}>
            <Icon type={"MaterialIcons"} name={"keyboard-arrow-down"} size={20} color={"#4F5458"} />
          </Pressable>
        </View>

        <Text style={{ fontSize: 14, width: "100%", textAlign: "right" }}>
          <Icon type={"FontAwesome5"} solid name={"eye"} size={14} color={"#4F5458"} />
          {" " + convertBigNumber(item.view) + "    "}
          <Icon type={"FontAwesome5"} solid name={"star"} size={14} color={"#4F5458"} />
          {" " + convertBigNumber(item.notice) + "    "}
          <Icon type={"FontAwesome5"} solid name={"share"} size={14} color={"#4F5458"} />
          {" " + convertBigNumber(item.share)}
        </Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={expand}
          style={{ overflow: "hidden", marginBottom: 15 }}>
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>{item.label}</Text>
          <Text style={{ fontSize: 16, color: "#24A8AF", marginBottom: 5 }}>#home #vietnam #QuyetThang</Text>
          <Text style={{ fontSize: 16, color: "#4F5458", lineHeight: 22 }}>{item.content}</Text>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                          colors={["#00000000", "#fff"]} locations={[0.3, 1]}
                          pointerEvents={"none"}
                          style={[{
                            height: "100%",
                            width: "100%",
                            position: "absolute",
                            bottom: 0,
                            opacity: expand ? 0 : 1
                          }]} />
        </ScrollView>
      </View>
    </Pressable>
  );
};

export default memo(Item);
