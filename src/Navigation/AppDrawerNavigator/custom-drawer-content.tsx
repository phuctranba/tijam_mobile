import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { FC, memo, useCallback, useContext, useEffect, useState } from "react";
import CustomDrawerItem from "../../Components/CustomDrawerItem/custom-drawer-item";
import Icon from "../../Components/BaseComponents/Icon";
import { MENU } from "../../Utils/Values";
import style from "./style";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ControllApp from '../../Store/Actions/controll-app';

const CustomDrawerContent: FC<any> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { progress, navigation, color, updateDrawerAction } = props;
  const styles = style(color);

  useEffect(() => {
    progress && updateDrawerAction(progress);
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

function mapDispatchToProps(dispatch) {
  return {
    updateDrawerAction: bindActionCreators(ControllApp.updateDrawer, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(CustomDrawerContent);
