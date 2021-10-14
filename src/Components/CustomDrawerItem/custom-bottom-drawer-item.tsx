import React, { FC, memo } from "react";
import { Text, TouchableOpacityProps, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import style from "./style";

interface IProps extends TouchableOpacityProps {
  titleLogout: String;
  titleSettings: String;
  icon: String;
  titleStyle: object;
  color: any
}

const CustomBottomDrawerItem: FC<any> = (props: IProps) => {
  const { titleSettings, titleLogout, icon, titleStyle, color, ...touchableProps } = props;
  const styles = style(color);
  return (
    <View style={styles.containerBottom}>
      {/*settings*/}
      <TouchableOpacity activeOpacity={0.8} style={styles.container} {...touchableProps}>
        <View style={styles.icon}>
          {/* <Icon {...icon} /> */}
          {icon}
        </View>
        <Text style={[styles.title, titleStyle]}>{titleSettings}</Text>
      </TouchableOpacity>

      <View style={styles.stroke} />

      {/*log out*/}
      <TouchableOpacity activeOpacity={0.8} style={styles.container} {...touchableProps}>
        <Text style={[styles.title, titleStyle]}>{titleLogout}</Text>
      </TouchableOpacity>
    </View>

  );
};

export default memo(CustomBottomDrawerItem);
