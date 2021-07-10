import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacityProps, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps extends TouchableOpacityProps {
  titleLogout: String;
  titleSettings: String;
  icon: String;
}

const CustomBottomDrawerItem: FC<any> = (props: IProps) => {
  const { titleSettings, titleLogout, icon, titleStyle, ...touchableProps } = props;
  return (
    <View style={{flexDirection:'row',alignItems:'center', width:"100%"}}>
      {/*settings*/}
      <TouchableOpacity style={styles.container} {...touchableProps}>
        <View style={styles.icon}>
          {/* <Icon {...icon} /> */}
          {icon}
        </View>
        <Text style={[styles.title, titleStyle]}>{titleSettings}</Text>
      </TouchableOpacity>

      <View style={{width:2, height:20, backgroundColor:'white', marginHorizontal: 15}}/>

      {/*log out*/}
      <TouchableOpacity style={styles.container} {...touchableProps}>
        <Text style={[styles.title, titleStyle]}>{titleLogout}</Text>
      </TouchableOpacity>
    </View>

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
    fontSize: 17,
    color: "rgba(255,255,255,0.63)",
    fontWeight: "600"
  }
});

export default CustomBottomDrawerItem;
