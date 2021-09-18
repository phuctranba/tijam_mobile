import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { FC, memo, useCallback, useContext, useEffect, useState } from "react";
import CustomDrawerItem from "../../components/CustomDrawerItem/CustomDrawerItem";
import { DrawerAnimationContext } from "../../contexts/DrawerAnimationContext";
import Icon from "../../components/Icon";
import { MENU } from "../../values";
import style from "./style";

const CustomDrawerContent: FC<any> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { progress, navigation, color } = props;
  const { setProgress } = useContext(DrawerAnimationContext);
  const styles = style(color);

  useEffect(() => {
    progress && setProgress(progress);
  }, [progress]);

  const renderItem = useCallback((item, index) => (
    <CustomDrawerItem
      key={item.name}
      title={item.title}
      icon={<Icon type={item.icon_type} name={item.icon} color={item.color} size={item.icon_size} />}
      onPress={() => {
        navigation.navigate(item.name);
        setCurrentIndex(index);
      }}
      titleStyle={{
        color: "#fff",
        fontSize: index == currentIndex ? 21 : 17,
        fontWeight: index == currentIndex ? "bold" : "normal"
      }}
    />
  ), [currentIndex]);

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.container}
    >
      {MENU.map(renderItem)}
    </DrawerContentScrollView>
  );
};

export default memo(CustomDrawerContent);
