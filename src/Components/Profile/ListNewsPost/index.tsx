import React, { FC, memo, useCallback } from "react";
import { FlatList } from "react-native";
import { DATA_POST_HOME } from "../../../Utils/Values/fakeDataEnum";
import { SIZES } from "../../../Utils/Values";
import Item from "./item";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import style, { SIZE_ITEM } from "./style";

interface Props {
  navigation: DrawerNavigationProp<any>,
  expand: boolean,
  expandAnimated: Function,
  color: any
}

const ListNewsPost: FC<Props> = (props) => {
  const { navigation, expand, expandAnimated, color } = props;
  const styles = style(color);

  const renderItem = useCallback(({ item }) => <Item color={color} styles={styles} expand={expand} item={item}
                                                     expandAnimated={expandAnimated} />, [expand]);
  const keyExtractor = useCallback((item) => item.uuid, []);
  const getItemLayout = useCallback((data, index) => ({
    length: SIZE_ITEM,
    offset: SIZE_ITEM * index,
    index
  }), []);

  return (
    <FlatList horizontal
              data={DATA_POST_HOME}
              style={{ flexGrow: 0 }}
              contentContainerStyle={styles.contentContainer}
              renderItem={renderItem}
              getItemLayout={getItemLayout}
              removeClippedSubviews={true}
              keyExtractor={keyExtractor}
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              snapToInterval={SIZE_ITEM}
              decelerationRate={0.8}
              bounces={false}
              scrollEventThrottle={16}
    />
  );
};

export default memo(ListNewsPost);
