import React, { FC, memo } from "react";
import style from "./style";
import { createStackNavigator } from "@react-navigation/stack";

import DetailsScreen from "../../Containers/Detail";
import Home from "../../Containers/Home";
import Animated from "react-native-reanimated";
import { useIsDrawerOpen } from "@react-navigation/drawer";
import Profile from "../../Containers/Profile";
import EditProfile from "../../Containers/EditProfile";
import CreatePost from "../../Containers/CreatePost";
import Intro from "../../Containers/Intro";
import Login from "../../Containers/Login";

const Stack = createStackNavigator();

const AppStackNavigator: FC<any> = (props) => {
  const { progress } = props;
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
        style={[styles.containerStack, { borderRadius: borderRadius, transform: [{ translateX: translateX }] }]}>
        <Stack.Navigator
          screenOptions={{
            header: () => null
          }}>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="CreatePost" component={CreatePost} />
        </Stack.Navigator>
      </Animated.View>
    </Animated.View>
  );
};

export default memo(AppStackNavigator);
