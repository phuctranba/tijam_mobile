import React, { FC, memo } from "react";
import { FlatList } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import SearchBar from "../../components/Home/SearchBar";
import { LIGHT } from "../../values/themes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ListType from "../../components/Home/ListType";
import ListTag from "../../components/Home/ListTag";
import { DATA_POST_HOME } from "../../values/fakeDataEnum";
import MarkerPost from "../../components/Home/MarkerPost";
import ListNewsPost from "../../components/Home/ListNewsPost";
import style from "./style";
import Item from "../../components/Home/ListNewsPost/item";
import { SIZES } from "../../values";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const HomeScreen: FC<any> = (props) => {
  const { navigation } = props;
  const styles = style(LIGHT.HOME);
  const translationX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  return (
    <SafeAreaProvider style={styles.container}>

      <SearchBar navigation={navigation} image={require("../../assets/images/avatar.png")} color={LIGHT.HOME} />
      <ListType color={LIGHT.HOME} />
      <ListTag color={LIGHT.HOME} />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 20.9594218,
          longitude: 105.8481514,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }}
        customMapStyle={LIGHT.MAPSTYLE}>
        {DATA_POST_HOME.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}>
            <MarkerPost color={LIGHT.HOME} item={marker} />
          </Marker>
        ))}
      </MapView>

      <ListNewsPost/>

    </SafeAreaProvider>
  );
};

export default memo(HomeScreen);
