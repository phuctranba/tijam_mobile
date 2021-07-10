import React, { FC, memo } from "react";
import { View } from "react-native";
import { GENDER } from "../../values";
import CountAction from "../../components/Profile/CountAction";
import { LIGHT } from "../../values/themes";
import Infor from "../../components/Profile/Infor";
import BottomButton from "../../components/Profile/BottomButton";

const Profile: FC<any> = (props) => {
  const { navigation } = props;

  const isGuest = true;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Infor navigation={navigation} color={LIGHT.PROFILE} name={"Trần Khánh Nhi"} dob={new Date()}
             gender={GENDER.WOMEN} isGuest={isGuest} nickname={"jimmi"}
             selfDescribing={"Tôi là một cô nàng cá tính, hay hóng chuyện nhưng cực kỳ đáng yêu."} />


      {/*view count*/}
      <CountAction color={LIGHT.PROFILE} followCount={897} notiveCount={23749} shareCount={87} />

      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/*noi dung*/}
      </View>

      {isGuest ?
        <BottomButton navigation={navigation} color={LIGHT.PROFILE} isFollowed={true} />
        :
        null
      }
    </View>
  );
};
export default memo(Profile);
