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

import React, { useEffect, FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from '../../containers/Detail';
import HomeScreen from '../../containers/Home';
import { DrawerAnimationContext } from '../../contexts/DrawerAnimationContext';
import Animated from 'react-native-reanimated';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import Profile from '../../containers/Profile';
import EditProfile from '../../containers/EditProfile';

const Stack = createStackNavigator();

const AppStackNavigator:FC<any> = (props) => {
  const { progress } = React.useContext(DrawerAnimationContext);

  const isDraweOpen = useIsDrawerOpen();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.73],
  });

  const backgroundScreen = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.85],
  });

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 85],
  });

  const translateXContainer = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, -85],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        transform: [
          { scale: scale },
          { translateX: translateXContainer },
        ],
      }}
    >
      <Animated.View
        style={{
          position: 'absolute',
          height: '100%',
          borderRadius: borderRadius,
          overflow: 'hidden',
          backgroundColor: 'white',
          opacity: 0.4,
          transform: [
            { scale: backgroundScreen }
          ],
          zIndex: 0,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {isDraweOpen && <DetailsScreen />}
      </Animated.View>

      <Animated.View
        style={{
          flex: 1,
          borderRadius: borderRadius,
          overflow: 'hidden',
          transform: [
            { translateX: translateX },
          ],
        }}
      >
        <Stack.Navigator
          screenOptions={{
            header: () => null,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      </Animated.View>
    </Animated.View>
  );
};

export default AppStackNavigator;
