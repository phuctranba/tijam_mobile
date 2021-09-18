/**
 * borderRadius: new Animated.Value(100)
 *
 * Animated.timing(this.state.borderRadius, {
      toValue: 16,
      duration: 1200,
      useNativeDriver: true
    }).start();
 *
 *
 * <Animated.View
 style={{
    borderRadius: this.state.borderRadius,
 */
// import { Text, View } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';

import React, { FC } from "react";
import style from "./style";
import { createStackNavigator } from "@react-navigation/stack";

import DetailsScreen from "../../containers/Detail";
import Home from "../../containers/Home";
import { DrawerAnimationContext } from "../../contexts/DrawerAnimationContext";
import Animated from "react-native-reanimated";
import { useIsDrawerOpen } from "@react-navigation/drawer";
import Profile from "../../containers/Profile";
import EditProfile from "../../containers/EditProfile";
import CreatePost from "../../containers/CreatePost";
import Intro from "../../containers/Intro";
import Login from "../../containers/Login";

const Stack = createStackNavigator();

const AppStackNavigator: FC<any> = (props) => {
  const { progress } = React.useContext(DrawerAnimationContext);
  const styles = style(null);
  const isDraweOpen = useIsDrawerOpen();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.73]
  });

  const backgroundScreen = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.85]
  });

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 85]
  });

  const translateXContainer = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, -85]
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 30]
  });

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale: scale }, { translateX: translateXContainer }] }]}>
      <Animated.View
        style={[styles.containerDrawer, { borderRadius: borderRadius, transform: [{ scale: backgroundScreen }] }]}>
        {isDraweOpen && <DetailsScreen />}
      </Animated.View>

      <Animated.View
        style={[styles.containerStack, { borderRadius: borderRadius, transform: [{ translateX: translateX }] }]}
      >
        <Stack.Navigator
          screenOptions={{
            header: () => null
          }}
        >
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="CreatePost" component={CreatePost} />
        </Stack.Navigator>
      </Animated.View>
    </Animated.View>
  );
};

export default AppStackNavigator;
