import React, { FC, memo, useCallback, useRef } from "react";
import { Pressable, Text, View } from "react-native";
import { COLOR_TYPE, ICON_TYPE } from "../../../values";
import NewsPost from "../../../models/NewsPost";
import Icon from "../../Icon";
import moment from "moment";
import FastImage from "react-native-fast-image";
import { convertBigNumber } from "../../../utils";
import LinearGradient from "react-native-linear-gradient";
import { LongPressGestureHandler, ScrollView, State, TapGestureHandler } from "react-native-gesture-handler";
import { moderateScale } from "react-native-size-matters";
import { HEIGHT_ITEM_BIG, HEIGHT_ITEM_SMALL, SIZE_IC_INFO } from "./style";

interface ItemProps {
  item: NewsPost,
  expand: boolean,
  expandAnimated: Function,
  showStarAnimated: Function,
  styles: any,
  color:any
}

const Item: FC<ItemProps> = ({ item, expand, expandAnimated, showStarAnimated, styles, color }) => {

  const doubleTapRef = useRef(null);

  const onSingleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      expandView();
    }
  };

  const onDoubleTap = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      showStarAnimated(event.nativeEvent.absoluteX, event.nativeEvent.y);
    }
  };

  const onLongPress = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      console.log("Long press");
    }
  };

  const totalMinutes = moment(item.duration).diff(new Date(), "minutes");

  const expandView = useCallback(() => expandAnimated(), []);

  return (
    <TapGestureHandler
      enabled={!expand}
      onHandlerStateChange={onSingleTap}
      waitFor={doubleTapRef}>
      <TapGestureHandler
        enabled={expand}
        waitFor={doubleTapRef}>
        <TapGestureHandler enabled={expand} ref={doubleTapRef} onHandlerStateChange={onDoubleTap} numberOfTaps={2}>
          <LongPressGestureHandler
            onHandlerStateChange={onLongPress}
            minDurationMs={600}>

            {/*container*/}
            <View
              style={[styles.containerItem, {
                height: expand ? HEIGHT_ITEM_BIG : HEIGHT_ITEM_SMALL,
                transform: [{ scale: expand ? 0.95 : 0.85 }]
              }]}>

              {/*duration*/}
              <View style={[styles.viewDuration, { backgroundColor: COLOR_TYPE[item.type] }]}>
                <Icon type={"MaterialCommunityIcons"} name={ICON_TYPE[item.type]} color={color.LISTPOST_IC_TYPE}
                      size={moderateScale(16, 0.3)} />
                <Text style={styles.txtDuration}>{Math.floor(totalMinutes / 60)}:{totalMinutes % 60}</Text>
              </View>

              {/*header*/}
              <View style={styles.viewHeaderItem}>
                <FastImage
                  style={styles.avatar}
                  source={{
                    uri: item.avatar,
                    priority: FastImage.priority.normal
                  }}
                  resizeMode={"cover"}
                />

                {/*nickname and time create*/}
                <View style={styles.txtHeader}>
                  <Text style={styles.txtNickname} numberOfLines={1}
                        ellipsizeMode={"tail"}>{item.nickname}</Text>
                  <Text style={styles.txtCreateTs}>{moment(item.create_ts).format("HH:mm  DD/MM/yyyy")}</Text>
                </View>

                {/*close btn*/}
                <Pressable
                  disabled={!expand}
                  onPress={expandView}
                  hitSlop={styles.hitSlop}
                  style={[styles.viewCloseBtn, { opacity: expand ? 1 : 0 }]}>
                  <Icon type={"MaterialIcons"} name={"keyboard-arrow-down"} size={moderateScale(20, 0.3)}
                        color={"#4F5458"} />
                </Pressable>
              </View>

              {/*count post's infor*/}
              <Text style={styles.txtCountInfor}>
                <Icon type={"FontAwesome5"} solid name={"eye"} size={SIZE_IC_INFO} color={color.LISTPOST_IC_COUNT} />
                {" " + convertBigNumber(item.view) + "    "}
                <Icon type={"FontAwesome5"} solid name={"star"} size={SIZE_IC_INFO} color={color.LISTPOST_IC_COUNT} />
                {" " + convertBigNumber(item.notice) + "    "}
                <Icon type={"FontAwesome5"} solid name={"share"} size={SIZE_IC_INFO} color={color.LISTPOST_IC_COUNT} />
                {" " + convertBigNumber(item.share)}
              </Text>

              {/*scrollview content and image*/}
              <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEnabled={expand}
                style={{ width: "100%" }}>
                <Text style={styles.txtLabel}>{item.label}</Text>
                <Text style={styles.txtTag}>#home #vietnam #QuyetThang</Text>
                <Text style={styles.txtContent}>{item.content}</Text>
                {item.image != null && item.image != "" ?
                  <FastImage
                    style={[styles.image, { height: item.image_height }]}
                    source={{
                      uri: item.image,
                      priority: FastImage.priority.normal
                    }}
                    resizeMode={"contain"}
                  /> : null}
              </ScrollView>

              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                              colors={["#00000000", color.LISTPOST_LG]} locations={[0.3, 1]}
                              pointerEvents={"none"}
                              style={[styles.viewLinearGD, { opacity: expand ? 0 : 1 }]} />
            </View>
          </LongPressGestureHandler>
        </TapGestureHandler>
      </TapGestureHandler>
    </TapGestureHandler>
  );
};

export default memo(Item);
