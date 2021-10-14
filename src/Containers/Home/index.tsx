import React, { FC, memo, useCallback, useState } from "react";
import { FlatList } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import SearchBar from "../../Components/Home/SearchBar";
import { LIGHT } from "../../Utils/Themes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ListType from "../../Components/Home/ListType";
import ListTag from "../../Components/Home/ListTag";
import { DATA_POST_HOME } from "../../Utils/Values/fakeDataEnum";
import MarkerPost from "../../Components/Home/MarkerPost";
import ListNewsPost from "../../Components/Home/ListNewsPost";
import style from "./style";
import Item from "../../Components/Home/ListNewsPost/item";
import { SIZES } from "../../Utils/Values";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Home: FC<any> = (props) => {
  const { navigation } = props;
  const styles = style(LIGHT.HOME);
  const [mapReady, setMapReady] = useState(false);
  const translationX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationX.value = event.contentOffset.x;
  });

  const setStateMapReady = useCallback(() => setTimeout(() => setMapReady(true), 1000), []);

  return (
    <SafeAreaProvider style={styles.container}>

      <SearchBar navigation={navigation} image={'https://static.tintuc.com.vn/images/ver3/2019/10/22/c19c3dea99aa70f429bb.jpg'} color={LIGHT.HOME} />
      <ListType color={LIGHT.HOME} />
      <ListTag color={LIGHT.HOME} />

      <MapView
        onMapReady={setStateMapReady}
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
            tracksViewChanges={!mapReady}
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}>
            <MarkerPost color={LIGHT.HOME} item={marker} />
          </Marker>
        ))}
      </MapView>

      <ListNewsPost color={LIGHT.HOME}/>

    </SafeAreaProvider>
  );
};

export default memo(Home);
