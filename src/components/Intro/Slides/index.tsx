import React, { FC, forwardRef, memo, useCallback, useImperativeHandle, useRef } from "react";
import { FlatList, Text, View } from "react-native";
import style, { SIZE_ITEM } from "./style";
import { SLIDE_INTRO } from "../../../values";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface PropsItem {
  image: string,
  title: string,
  description: string,
  step: number
}


const Item: FC<PropsItem> = (props, styles) => {
  const { title, image, description } = props;

  return (
    <View style={styles.containerSlide}>
      <LottieView source={image} autoPlay style={styles.lottieView} />
      <View style={styles.viewTxt}>
        <Text style={styles.titleTxt}>{title}</Text>
        <Text style={styles.descriptionTxt}>{description}</Text>
      </View>

    </View>
  );
};


const Slides: FC<any> = forwardRef((props,ref) => {
  const { color, scrollHandler, setCurrentIndex } = props;
  const styles = style(color);
  const flatList = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      scrollTo(index:number) {
        flatList.current.scrollToIndex({ index });
      },
    }),
  );
  const keyExtractor = useCallback((item) => item.step, []);

  const getItemLayout = useCallback((data, index) => ({
    length: SIZE_ITEM,
    offset: SIZE_ITEM * index,
    index
  }), []);

  const onViewableItemsChanged = ({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  };

  return (
    <AnimatedFlatList
      ref={flatList}
      showsHorizontalScrollIndicator={false}
      data={SLIDE_INTRO}
      renderItem={({ item }) => Item(item, styles)}
      horizontal
      style={{ flexGrow: 0, height: "85%" }}
      contentContainerStyle={{ height: "100%" }}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      pagingEnabled
      snapToInterval={SIZE_ITEM}
      bounces={false}
      decelerationRate={0.8}
      onScroll={scrollHandler}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 40
      }}
    />
  );
});

export default memo(Slides);
