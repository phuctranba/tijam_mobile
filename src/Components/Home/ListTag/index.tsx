import React, { FC, memo } from "react";
import { FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import style from "./style";
import { DATA_TAG_POST_HOME } from "../../../Utils/Values";

interface PropsItem {
  tag: string,
  selected: boolean
}


const Item: FC<PropsItem> = (props, styles) => {
  const { tag, selected } = props;

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.touchItem}>
      <Text style={selected ? styles.textItemSelected : styles.textItem} ellipsizeMode={"tail"}
            numberOfLines={1}>#{tag}</Text>
    </TouchableOpacity>
  );
};


const ListTag: FC<any> = (props) => {
  const { color } = props;
  const styles = style(color);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.tag}
      data={DATA_TAG_POST_HOME}
      renderItem={({ item }) => Item(item, styles)}
      style={styles.container}
    />
  );
};

export default memo(ListTag);
