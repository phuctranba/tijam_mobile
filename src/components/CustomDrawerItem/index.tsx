import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacityProps, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps extends TouchableOpacityProps {
  title: String;
  icon: String;
}

const CustomDrawerItem: FC<any> = (props: IProps) => {
  const { title, icon, titleStyle, ...touchableProps } = props;
  return (
    <TouchableOpacity style={styles.container} {...touchableProps}>
      <View style={styles.icon}>
        {/* <Icon {...icon} /> */}
        {icon}
      </View>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    marginVertical: 8
  },
  icon: {
    minWidth: 72,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: "rgba(255,255,255,0.63)",
    fontWeight: "600"
  }
});

export default CustomDrawerItem;
