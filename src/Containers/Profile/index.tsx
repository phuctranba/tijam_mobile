import React, { FC, memo, useCallback, useRef, useState } from "react";
import { Pressable, View } from "react-native";
import { GENDER } from "../../Utils/Values";
import CountAction from "../../Components/Profile/CountAction";
import { LIGHT } from "../../Utils/Themes";
import Infor from "../../Components/Profile/Infor";
import BottomButton from "../../Components/Profile/BottomButton";
import ListNewsPost from "../../Components/Profile/ListNewsPost";
import { Transition, Transitioning } from "react-native-reanimated";
import { verticalScale } from "react-native-size-matters";

const transition = (
  <Transition.Together>
    <Transition.In type={"fade"} durationMs={500} />
    <Transition.Change />
    <Transition.Out type={"fade"} durationMs={500} />
  </Transition.Together>
);

const Profile: FC<any> = (props) => {
  const { navigation } = props;
  const [expand, setExpand] = useState(false);
  const refTransition = useRef();
  const isGuest = true;

  const expandAnimated = useCallback(() => {
    refTransition.current.animateNextTransition();
    setExpand(expand => !expand);
  }, [expand]);

  return (
    <Transitioning.View style={{ flex: 1, backgroundColor: "#FAFBF7" }} transition={transition} ref={refTransition}>
      <Infor navigation={navigation} color={LIGHT.PROFILE} name={"Trần Khánh Nhi"} dob={new Date()}
             gender={GENDER.WOMEN} isGuest={isGuest} nickname={"jimmi"}
             selfDescribing={"Tôi là một cô nàng cá tính, hay hóng chuyện nhưng cực kỳ đáng yêu."} />


      {/*view count*/}
      <CountAction color={LIGHT.PROFILE} followCount={897} notiveCount={23749} shareCount={87} />

      <Pressable onPress={expandAnimated} disabled={!expand} style={{
        flex: 1,
        backgroundColor: expand ? "rgba(0,0,0,0.4)" : "#00000000",
        justifyContent: "center",
        alignItems: "center",
        position: expand ? "absolute" : "relative",
        height: "100%",
        zIndex: 5,
        elevation: expand ? 5 : 0
      }}>
        <ListNewsPost color={LIGHT.PROFILE} navigation={props.navigation} expand={expand} expandAnimated={expandAnimated} />
      </Pressable>

      {
        expand ?
          <View style={{ flex: 1 }} />
          :
          null
      }

      {isGuest ?
        <BottomButton navigation={navigation} color={LIGHT.PROFILE} isFollowed={true} />
        :
        <View style={{ height: verticalScale(10) }} />
      }
    </Transitioning.View>
  );
};
export default memo(Profile);
