import React, { FC, memo, useCallback, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  Transition,
  Transitioning,
  useAnimatedGestureHandler,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { DATA_POST_HOME } from "../../../values/fakeDataEnum";
import { SIZES } from "../../../values";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent
} from "react-native-gesture-handler";
import Item from "./item";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const sizeItem = SIZES.WIDTH_WINDOW * 0.86;


type AnimatedGHContext = {
  startY: number;
};

const transition = (
  <Transition.Together>
    <Transition.In type={"fade"} durationMs={1000} />
    <Transition.Change />
    <Transition.Out type={"fade"} durationMs={1000} />
  </Transition.Together>
);

const ListNewsPost: FC<any> = (props) => {
  const { navigation } = props;
  // const styles = style(LIGHT.HOME);
  const scrollX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const [expand, setExpand] = useState(false);
  const ref = useRef();

  const expandAnimated = useCallback(() => {
    ref.current.animateNextTransition();
    setExpand(expand => !expand);
  }, []);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, AnimatedGHContext>({
    onStart: (_, ctx) => {
      ctx.startY = translationY.value;
    },
    onActive: (event, ctx) => {
      translationY.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      translationY.value = withSpring(translationY.value < 50 ? 0 : 220);
    }
  });

  const onSingleTap = (event: TapGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      translationY.value = withSpring(translationY.value > 50 ? 0 : 220);
    }
  };

  const styleAnimatedY = useAnimatedStyle(() => {
    const translateY = interpolate(
      translationY.value,
      [-50, 0, 220, 300],
      [-50, 0, 220, 300],
      Extrapolate.CLAMP
    );
    return { transform: [{ translateY }] };
  });

  const opacity = useAnimatedStyle(() => {
    const opacity = interpolate(
      translationY.value,
      [-50, 0, 220, 300],
      [0, 0, 1, 1],
      Extrapolate.CLAMP
    );
    return { opacity };
  });

  const renderItem = useCallback(({ item }) => <Item expandAnimated={expandAnimated}
                                                     item={item}
                                                     expand={expand} />, [expand]);
  const keyExtractor = useCallback((item) => item.uuid, []);
  const getItemLayout = useCallback((data, index) => ({
    length: SIZES.WIDTH_WINDOW,
    offset: SIZES.WIDTH_WINDOW * index,
    index
  }), []);

  return (
    <Transitioning.View transition={transition} ref={ref} style={{ width: SIZES.WIDTH_WINDOW, position: "absolute", bottom: 0 }}>
      <Animated.View style={[{ width: '100%'}, styleAnimatedY]}>

        <PanGestureHandler
          enabled={!expand}
          onGestureEvent={gestureHandler}
          onHandlerStateChange={gestureHandler}>
          <Animated.View>
            <TapGestureHandler enabled={!expand} onHandlerStateChange={onSingleTap}>
              <Animated.View style={[{
                width: 50,
                height: 35,
                paddingBottom: 10,
                paddingTop: 20,
                alignSelf: "center"
              }, opacity]}>
                <View style={{
                  width: "100%",
                  height: 5,
                  backgroundColor: "#4F5458",
                  borderRadius: 10
                }} />
              </Animated.View>
            </TapGestureHandler>
          </Animated.View>
        </PanGestureHandler>

        <PanGestureHandler
          enabled={!expand}
          onGestureEvent={gestureHandler}
          activeOffsetY={[-20, 20]}
          onHandlerStateChange={gestureHandler}>
          <AnimatedFlatList horizontal
                            data={DATA_POST_HOME}
                            contentContainerStyle={{ alignItems: "flex-end" }}
                            renderItem={renderItem}
                            getItemLayout={getItemLayout}
                            maxToRenderPerBatch={3}
                            removeClippedSubviews={true}
                            initialNumToRender={2}
                            keyExtractor={keyExtractor}
                            windowSize={3}
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            snapToInterval={SIZES.WIDTH_WINDOW}
                            decelerationRate={0.8}
                            bounces={false}
                            onScroll={scrollHandler}
                            scrollEventThrottle={16} />
        </PanGestureHandler>
      </Animated.View>
    </Transitioning.View>
  );
};

export default memo(ListNewsPost);
