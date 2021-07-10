import React, { FC, useContext } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "./CustomDrawerContent";
import AppStackNavigator from "../AppStackNavigator";
import { Dimensions, Image, Text, View } from "react-native";
import { DrawerAnimationContext } from "../../contexts/DrawerAnimationContext";
import Animated from "react-native-reanimated";
import CustomDrawerItem from "../../components/CustomDrawerItem";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "../../components/Icon";
import CustomBottomDrawerItem from "../../components/CustomBottomDrawerItem";

const Drawer = createDrawerNavigator();

const { width: WIDTH } = Dimensions.get("window");

const AppDrawerNavigator: FC<any> = () => {
  const { progress } = useContext(DrawerAnimationContext);

  const insets = useSafeAreaInsets();

  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, WIDTH]
  });

  const opacity = Animated.interpolateNode(progress, {
    inputRange: [0, 0.7, 1],
    outputRange: [0, 0, 1]
  });

  return (
    <>
      <View
        style={{
          position: "absolute",
          elevation: 1,
          zIndex: 2,
          top: Math.max(insets.top, 16),
          left: -WIDTH
        }}
      >
        <Animated.View
          style={{
            opacity: opacity,
            flexDirection: "row",
            alignItems: "center",
            transform: [{ translateX: translateX }],
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.65
          }}
        >
          {/*avatar*/}
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{
              height: 44,
              width: 44,
              borderRadius: 22,
              backgroundColor: "white",
              marginHorizontal: 24
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                color: "#ebf5f5"
              }}
            >
              zipenter
            </Text>
            <Text style={{ color: "#fff" }}>Trần Bá Phúc</Text>
          </View>
        </Animated.View>
      </View>

      <View
        style={{
          backgroundColor: "#24A8AF",
          flex: 1
        }}
      >
        <Drawer.Navigator
          initialRouteName="Screens"
          drawerType={"slide"}
          overlayColor="transparent"
          drawerStyle={{
            width: "65%",
            backgroundColor: "transparent",
            marginRight: -30
          }}
          sceneContainerStyle={{
            backgroundColor: "transparent",
            overflow: "visible",
            // paddingVertical: '20%',
            alignSelf: "center",
            // transform: [],
            zIndex: 1
          }}
          drawerContent={(props) => {
            return <CustomDrawerContent {...props} />;
          }}
        >
          <Drawer.Screen name="Screens">
            {(props) => {
              return <AppStackNavigator {...props} progress={progress} />;
            }}
          </Drawer.Screen>
          {/* <Drawer.Screen name="HomeScreen" component={HomeScreen} />
          <Drawer.Screen name="DetailsScreen" component={DetailsScreen} /> */}
        </Drawer.Navigator>
      </View>

      <View
        style={{
          position: "absolute",
          zIndex: 1,
          bottom: Math.max(insets.bottom, 16),
          left: -WIDTH
        }}
      >
        <Animated.View
          style={{
            opacity: opacity,
            flexDirection: "row",
            alignItems: "center",
            transform: [{ translateX: translateX }]
          }}
        >
          <CustomBottomDrawerItem
            titleLogout={'Đăng xuất'}
            titleSettings={'Cài đặt'}
            icon={<Icon type={"MaterialIcons"} name="settings" color="#fff" size={26} />}
            titleStyle={{ color: "#fff" }}
          />
        </Animated.View>
      </View>
    </>
  );
};

export default AppDrawerNavigator;
