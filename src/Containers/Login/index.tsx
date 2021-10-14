import React, { FC, memo, useCallback, useRef, useState } from "react";
import { FlatList, Image, View } from "react-native";
import style from "./style";
import { LIGHT } from "../../Utils/Themes";
import { SIZE_ITEM } from "../../Components/Intro/Slides/style";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import Background from "../../Components/Login/Background";
import ListStep from "../../Components/Login/ListStep";
import ButtonRouter from "../../Components/Login/ButtonRouter";
import ModalConfirm from "../../Components/Login/ModalConfirm";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Login: FC<any> = (props) => {
  const { navigation } = props;
  const styles = style(LIGHT.LOGIN);

  const [isLogin, setIsLogin] = useState(true);
  const [numOfStep, setNumOfStep] = useState(true);
  const flatList = useRef(null);
  const modalConfirm = useRef(null);
  const btnRouter = useRef(null);
  const listStepRef = useRef(null);
  const translationX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  const setStepButton = useCallback((number)=>{
    btnRouter.current.setStep(number)
  },[])

  const onPressNext = useCallback((index)=>{
    listStepRef.current.onPressNext(index)
  },[])

  const onPressPre = useCallback((index)=>{
    listStepRef.current.onPressPre(index)
  },[])

  console.log('render')

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>

      <Image source={require("../../Assets/Images/tijam-logo.png")}
             style={styles.logo} />

      <ListStep ref={listStepRef} setCurrentStep={setStepButton} scrollHandler={scrollHandler} color={LIGHT.LOGIN} />

      <ButtonRouter ref={btnRouter} color={LIGHT.LOGIN} onPressNext={onPressNext} onPressPre={onPressPre}/>

      <Background color={LIGHT.LOGIN} translationX={translationX} sizeStep={2} />
      {/*<ModalConfirm color={LIGHT.LOGIN} ref={modalConfirm}/>*/}
    </View>
  );
};
export default memo(Login);
