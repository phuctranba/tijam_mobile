import React, { FC } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "./custom-drawer-content";
import AppStackNavigator from "../AppStackNavigator";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import style from "./style";
import Icon from "../../Components/BaseComponents/Icon";
import CustomBottomDrawerItem from "../../Components/CustomDrawerItem/custom-bottom-drawer-item";
import FastImage from "react-native-fast-image";
import { SIZES } from "../../Utils/Values";
import { connect } from "react-redux";

const Drawer = createDrawerNavigator();


const AppDrawerNavigator: FC<any> = (props) => {
  const { progressDrawer } = props;
  const styles = style(null);

  const translateX = Animated.interpolateNode(progressDrawer, {
    inputRange: [0, 1],
    outputRange: [0, SIZES.WIDTH_WINDOW]
  });

  const opacity = Animated.interpolateNode(progressDrawer, {
    inputRange: [0, 0.7, 1],
    outputRange: [0, 0, 1]
  });

  return (
    <>
      <View style={styles.containerHeader}>
        <Animated.View style={[styles.viewHeader, { opacity: opacity, transform: [{ translateX: translateX }] }]}>

          {/*avatar*/}
          <FastImage style={styles.avatar}
                     source={{
                       uri: "https://static.tintuc.com.vn/images/ver3/2019/10/22/c19c3dea99aa70f429bb.jpg",
                       priority: FastImage.priority.normal
                     }}
                     resizeMode={"cover"} />
          <View>
            <Text style={styles.txtNickname}>
              jimmi
            </Text>
            <Text style={styles.txtName}>Trần Khánh Nhi</Text>
          </View>
        </Animated.View>
      </View>

      <View style={styles.containerDrawer}>
        <Drawer.Navigator
          initialRouteName="Screens"
          drawerType={"slide"}
          overlayColor="transparent"
          drawerStyle={styles.drawerStyle}
          sceneContainerStyle={styles.sceneContainerStyle}
          drawerContent={(props) => {
            return <CustomDrawerContent {...props} />;
          }}>
          <Drawer.Screen name="Screens">
            {(props) => {
              return <AppStackNavigator {...props} progress={progressDrawer} />;
            }}
          </Drawer.Screen>
        </Drawer.Navigator>
      </View>

      <View style={styles.containerBottom}>
        <Animated.View style={[styles.viewBottom, { opacity: opacity, transform: [{ translateX: translateX }] }]}>
          <CustomBottomDrawerItem
            titleLogout={"Đăng xuất"}
            titleSettings={"Cài đặt"}
            icon={<Icon type={"MaterialIcons"} name="settings" color="#fff" size={26} />}
            titleStyle={styles.txtBottom} />
        </Animated.View>
      </View>
    </>
  );
};

function mapStateToProps(state: any) {
  return {
    progressDrawer: state.controllApp.progressDrawer
  };
}

export default connect(mapStateToProps)(AppDrawerNavigator);
