import React, { FC, memo, useCallback, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { LIGHT } from "../../values/themes";
import style from "./style";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Slides from "../../components/Intro/Slides";
import Pagination from "../../components/Intro/Pagination";
import { SLIDE_INTRO } from "../../values";
import { moderateScale } from "react-native-size-matters";
import Icon from "../../components/Icon";
import Background from "../../components/Intro/Background";


const Intro: FC<any> = (props) => {
  const styles = style(LIGHT.INTRO);
  const { navigation } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideList = useRef(null);
  const translationX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });


  const pressRouter = (next: boolean) => {
    if (next) {
      if (currentIndex != SLIDE_INTRO.length - 1) {
        slideList.current.scrollTo(currentIndex + 1);
      } else
        goToLogin();
    } else if (currentIndex > 0)
      slideList.current.scrollTo(currentIndex - 1);
  };

  const goToLogin = useCallback(() => {
    navigation.navigate("Login");
  }, []);

  return (
    <View style={{ flex: 1 }}>

      {/*nút bỏ qua*/}
      <TouchableOpacity activeOpacity={0.5}
                        onPress={goToLogin}
                        disabled={currentIndex == (SLIDE_INTRO.length - 1)}
                        style={styles.skipTouch}>
        <Text style={[styles.skipTxt, { opacity: currentIndex == (SLIDE_INTRO.length - 1) ? 0 : 1 }]}>Bỏ qua</Text>
      </TouchableOpacity>

      {/*Nội dung*/}
      <Slides ref={slideList} color={LIGHT.INTRO} scrollHandler={scrollHandler} setCurrentIndex={setCurrentIndex} />

      {/*router bên dưới*/}
      <View style={styles.viewRouter}>

        <TouchableOpacity activeOpacity={0.9}
                          onPress={() => pressRouter(false)}
                          disabled={currentIndex == 0}
                          style={[styles.routerTouch, {
                            backgroundColor: "#FAFBF7",
                            opacity: currentIndex == 0 ? 0 : 1
                          }]}>
          <Icon type={"MaterialIcons"} name={"keyboard-arrow-left"} size={moderateScale(33, 0.3)}
                color={"rgba(109,123,129,0.8)"} />
        </TouchableOpacity>


        {/*3 chấm*/}
        <Pagination color={LIGHT.INTRO} translationX={translationX} />

        <TouchableOpacity activeOpacity={0.9} style={[styles.routerTouch, { backgroundColor: "#24A8AF" }]}
                          onPress={() => pressRouter(true)}>
          <Icon type={"MaterialIcons"} name={"keyboard-arrow-right"} size={moderateScale(33, 0.3)} color={"white"} />
        </TouchableOpacity>
      </View>

      <Background color={LIGHT.INTRO} translationX={translationX}/>

    </View>
  );
};

export default memo(Intro);
