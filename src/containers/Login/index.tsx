import React, { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import PhoneNumber from "../../components/Login/PhoneNumber";
import style from "./style";
import { LIGHT } from "../../values/themes";
import Password from "../../components/Login/Password";
import Nickname from "../../components/Login/Nickname";
import RegisterInformation from "../../components/Login/RegisterInformation";
import { SIZE_ITEM } from "../../components/Intro/Slides/style";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Background from "../../components/Login/Background";
import { SIZES } from "../../values";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Login: FC<any> = (props) => {
  const { navigation } = props;
  const styles = style(LIGHT.LOGIN);
  const routerLogin = [
    <PhoneNumber color={LIGHT.INTRO} />,
    <Password color={LIGHT.INTRO} />
  ];
  const routerSignup = [
    <PhoneNumber color={LIGHT.INTRO} />,
    <Password color={LIGHT.INTRO} />,
    <Nickname color={LIGHT.INTRO} />,
    <RegisterInformation color={LIGHT.INTRO} />
  ];

  const translationX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });
  const [router, setRouter] = useState(routerLogin);
  const flatList = useRef(null);

  const getItemLayout = useCallback((data, index) => ({
    length: SIZE_ITEM,
    offset: SIZE_ITEM * index,
    index
  }), []);

  const Item = useCallback(({ item }) =>{
    return item
  },[]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>

      <Image source={require("../../assets/images/tijam_logo.png")}
             style={styles.logo} />

      <AnimatedFlatList
        ref={flatList}
        showsHorizontalScrollIndicator={false}
        data={router}
        renderItem={Item}
        horizontal
        style={{ flexGrow: 0, height: "85%" }}
        contentContainerStyle={{ height: "100%" }}
        keyExtractor={(item, index) => index.toString()}
        getItemLayout={getItemLayout}
        pagingEnabled
        snapToInterval={SIZE_ITEM}
        bounces={false}
        decelerationRate={0.8}
        onScroll={scrollHandler}
        // onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 40
        }}
      />

      <Background color={LIGHT.INTRO} translationX={translationX} sizeStep={router.length}/>

    </View>
  );
};
export default memo(Login);
