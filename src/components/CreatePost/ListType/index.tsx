import React, { FC, memo } from "react";
import { FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Icon from "../../Icon";
import style from "./style";
import { DATA_TYPE_POST_HOME } from "../../../values";

interface PropsItem {
  title: string,
  icon: string,
  typeIcon: string,
  color: string,
  sizeIcon: number
}


const Item: FC<PropsItem> = (props, styles) => {
  const { title, icon, typeIcon, color, sizeIcon } = props;

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.touchItem}>
      <Icon type={typeIcon} name={icon} color={color} size={sizeIcon}/>
      <Text style={[styles.textItem, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};


const ListType: FC<any> = (props) => {
  const { color } = props;
  const styles = style(color);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      data={DATA_TYPE_POST_HOME}
      renderItem={({ item }) => Item(item, styles)}
      horizontal
      style={{ flexGrow: 0 }}
      contentContainerStyle={{ paddingLeft: "5%" }}
    />
  );
};

export default memo(ListType);
