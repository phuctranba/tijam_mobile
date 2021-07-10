import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { FC, useContext, useEffect } from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import CustomDrawerItem from "../../components/CustomDrawerItem";
import { DrawerAnimationContext } from "../../contexts/DrawerAnimationContext";
import Icon from "../../components/Icon";

const CustomDrawerContent: FC<any> = (props) => {
  const { progress, navigation } = props;

  const { setProgress } = useContext(DrawerAnimationContext);

  useEffect(() => {
    progress && setProgress(progress);
  }, [progress]);

  const opacity = Animated.interpolateNode(progress, {
    inputRange: [0, 0.7, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{
        flex: 1,
        backgroundColor: "transparent",
        paddingBottom: 25,
        overflow: "visible"
      }}
    >
      <View style={{ flexGrow: 1 }} />
      {/* <Animated.View style={{ opacity: opacity }}> */}
      <CustomDrawerItem
        title="Bài của tôi"
        icon={<Icon type={"MaterialCommunityIcons"} name="newspaper-variant" color="#ebf5f5" size={24} />}
        onPress={() => navigation.navigate("Home")}
        titleStyle={{ color: "#fff", fontSize:17 }}
      />
      <CustomDrawerItem
        title="Đã lưu"
        icon={<Icon type={"MaterialCommunityIcons"} name="content-save" color="#ebf5f5" size={24} />}
        onPress={() => navigation.navigate("Details")}
        titleStyle={{ color: "#fff", fontSize:17 }}
      />
      <CustomDrawerItem
        title="Theo dõi"
        icon={<Icon type={"MaterialIcons"} name="group-add" color="#ebf5f5" size={26} />}
        onPress={() => navigation.navigate("Home")}
        titleStyle={{ color: "#fff", fontSize:17 }}
      />
      <CustomDrawerItem
        title="Hồ sơ cá nhân"
        icon={<Icon type={"MaterialCommunityIcons"} name="card-account-details" color="#ebf5f5" size={23} />}
        onPress={() => navigation.navigate("Profile")}
        titleStyle={{ color: "#fff", fontSize:17 }}
      />
      <CustomDrawerItem
        title="Phản hồi"
        icon={<Icon type={"MaterialIcons"} name="feedback" color="#ebf5f5" size={26} />}
        onPress={() => navigation.navigate("Home")}
        titleStyle={{ color: "#fff", fontSize:17 }}
      />
      {/* </Animated.View> */}

      <View style={{ flexGrow: 1 }} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
