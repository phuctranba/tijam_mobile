import React, { FC, memo } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { moderateScale } from "react-native-size-matters";

import Icon from "../../Icon";
import style from "./style";

interface Props {
  color: any,
  image: string,
  navigation: DrawerNavigationProp<any>
}

const SearchBar: FC<Props> = (props) => {
  const { color, image, navigation } = props;
  const styles = style(color);

  return (
    <View style={styles.container}>

      {/*avatar for drawer*/}
      <TouchableOpacity style={styles.touchAvatar}
                        onPress={() => navigation.openDrawer()}>
        <Image
          style={styles.avatar}
          source={image}
          resizeMode={"contain"}
        />
      </TouchableOpacity>

      {/*search*/}
      <Pressable style={styles.touchSearch} onPress={() => {
      }}>
        <Text allowFontScaling={false} style={styles.textSearch}>Tìm kiếm ở đây</Text>
      </Pressable>


      {/*add newspost*/}
      <TouchableOpacity style={styles.touchAdd}
                        onPress={() => navigation.openDrawer()}>
        <Icon type={"MaterialIcons"} name="add-location-alt" size={moderateScale(26)} color={color.SEARCHBAR_IC_ADD} />
      </TouchableOpacity>

    </View>
  );
};

export default memo(SearchBar);
